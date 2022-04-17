---
title: "OUTER JOIN, INNER JOINの違い"
date: "2022-04-13"
draft: false
slug: "outer-inner-join"
tags: ["sql", "mysql"]
---

こんにちは，ぬまです。

複数のテーブルを結合するSQLにINNER JOINとOUTER JOINがあります。
今回はこの二つの違いをLeetCodeを通じて学んだのでメモとして残します。

### INNER JOIN
INNER JOINは二つのテーブルを内部結合する時に使います。
内部結合したいと思ったら，INNER JOINの出番です。
内部結合とは，二つのテーブルを結合する時に，条件に一致するレコードのみを取得する結合方法です。

以下のテーブルを例に考えてみます。

Users

| id | name |
| ---- | ---- |
| 1 | name1 |
| 2 | name2 |
| 3 | name3 |

Posts

| id | title | owner_id |
| ---- | ---- | ---- |
| 1 | title1 | 1 |
| 2 | title2 | 1 |
| 3 | title3 | 3 |

上記のテーブルに対して，User(左)とそのUserが作成したPost(右)を結合したデータを取得すると以下のSQL分を作成します。

※左...結合時に左側に考えるテーブルのことで，主語のようなもの。

※右...結合時に右側に考えるテーブルのことで，目的語のようなもの。

```sql
SELECT * FROM users INNER JOIN posts ON users.id = posts.owner_id;
```
usersのテーブルのuser.idとpostsのowner_idが一致するデータのみを結合し，全てのカラムについて選択します。

Results
| id | name | id | title | owner_id |
| ---- | ---- | ---- | ---- | ---- |
| 1 | name1 | 1 | title1 | 1 |
| 1 | name1 | 2 | title2 | 1 |
| 3 | name3 | 3 | title3 | 3 |

結果がこのようになり，条件と一致するレコードに対してのみ取り出しています。

### OUTER JOIN
OUTER JOINは二つのテーブルを外部結合する時に使います。
外部結合とは，二つの結合する時に，すべてのレコードを結合します。そして，存在しないカラムにはNULLが入ります。
さらに，この外部結合には３種類の結合方法があります。

※MySQLではFULL OUTERが対応していないため，RIGHTとLEFTのみになります。(DBによって何が使えて何が使えないかについて，詳しくは知らないです。)

各外部結合について先ほどと同様の例を用いて紹介します。

#### LEFT OUTER JOIN
左外部結合のことで，ここでの左は左側に結合する外部結合のやり方のことで，テーブルの主語とは異なっていることに注意されたい。

```sql
SELECT * FROM users LEFT OUTER JOIN posts ON users.id = posts.owner_id;
```
上記のSQL文を生成すると，以下の結果が得られる。

Results
| id | name | id | title | owner_id |
| ---- | ---- | ---- | ---- | ---- |
| 1 | name1 | 2 | title2 | 1 |
| 1 | name1 | 1 | title1 | 1 |
| 2 | name2 | null | null | null |
| 3 | name3 | 3 | title3 | 3 |

このように，左外部結合では，全てのUserに対して，条件の一致するデータを取得するが，データが存在しないUserに対するデータにはnullが入る。

#### RIGHT OUTER JOIN
一方で，右外部結合の場合を考える。

```sql
SELECT * FROM users RIGHT OUTER JOIN posts ON users.id = posts.owner_id;
```

Results
| id | name | id | title | owner_id |
| ---- | ---- | ---- | ---- | ---- |
| 1 | name1 | 1 | title1 | 1 |
| 1 | name1 | 2 | title2 | 1 |
| 3 | name3 | 3 | title3 | 3 |

このように，全てのPosts(右)に対して，条件の一致するデータを取得するがm，データが存在しないPostsに対するデータにはnullが入る。

つまり，左外部結合では，二つのテーブルに対して，左側のテーブルの全てのレコードに対して条件に一致するレコードを取得し，存在しない場合はnullが入り，右外部結合では，二つのテーブルに対して右側のテーブルの全てのレコードに対して条件に一致するレコードを取得し，存在しない場合はnullが入れる。

#### FULL OUTER JOIN
今回はMySQLについて考えており，MySQLにはない構文なため割愛する。
考え方としては，和集合になる。

### まとめ
INNER JOIN

![inner join](/posts/inner_join.png)

LEFT OUTER JOIN

![left outer join](/posts/left_outer_join.png)


RIGHT OUTER JOIN

![right outer join](/posts/right_outer_join.png)

今回は，INNER JOINとOUTER JOINについてまとめました。普段はORMに頼っている部分があるので，今後もSQLの勉強を通して，理解を深められればなと思います。

では，また。