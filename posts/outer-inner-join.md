---
title: "OUTER JOIN, INNER JOINの違い"
date: "2022-04-13"
draft: true
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

```sql
SELECT * FROM users INNER JOIN posts ON users.id = posts.owner_id;
```

Result
| id | name | id | title | owner_id |
| ---- | ---- | ---- | ---- | ---- |
| 1 | name1 | 1 | title1 | 1 |
| 2 | name1 | 2 | title2 | 1 |
| 3 | name3 | 3 | title3 | 3 |

### OUTER JOIN
OUTER JOINは二つのテーブルを外部結合する時に使います。
外部結合とは，二つの結合する時に，すべてのレコードを結合します。そして，存在しないカラムにはNULLが入ります。
さらに，この外部結合には３種類の結合方法があります。
※MySQLではFULL OUTERが対応していないため，RIGHTとLEFTのみになります。(何が使えて何が使えないかは詳しくは知らないです。)

#### LEFT OUTER JOIN
```sql
SELECT * FROM USERS LEFT OUTER JOIN POSTS ON USERS.id = POSTS.user_id;
```

#### RIGHT OUTER JOIN
```sql
SELECT * FROM USERS RIGHT OUTER JOIN POSTS ON USERS.id = POSTS.user_id;
```

#### FULL OUTER JOIN