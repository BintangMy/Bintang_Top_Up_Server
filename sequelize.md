Catatan LC 2

sekarang di development

bikin fiturbaru nodemailer
buat branc baru
git checkout -b "nodemailer"

kalo udah selesai git status
git add .
git commit -m "add nodmailer"
git push origin nodemailer
git checkout development
git merge nodemailer
git push origin development

kalo 


*Bismillah

<!-- 
npx sequelize-cli model:create --name Game --attributes name:string,logoUrl:text,backgroundCardUrl:text,bannerUrl:text,description:text 
npx sequelize-cli model:create --name Item --attributes nominal:integer,price:integer,type:string,itemIconUrl:text,gameId:integer

npx sequelize-cli seed:create --name seeder-game
-->


======= PENTING ===========
#UNDO MIGRATION 
--npx sequelize-cli db:migrate:undo:all

#OPERATOR
--https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators

#CDN
--https://getbootstrap.com/docs/5.0/getting-started/download/#cdn-via-jsdelivr

#INCLUDE_NESTED
--https://stackoverflow.com/questions/33941943/nested-include-in-sequelize

*EJS

+ req params = ambil :   id
+ req query = ambil ?  search
+ req body = ambil data dari form

============================================


********************SETUP******************** 

*NPM
 
```
npm init -y
npm i express pg ejs sequelize
npm i -D nodemon sequelize-cli
touch .gitignore
npx sequelize init
npx sequelize db:create
```

- npm init -y
- npm i pg express ejs sequelize
- npm install -D sequelize-cli
- .gitignore masukan comen /node_modules
- npx sequelize-cli init

## [CONFIG]

- username: "postgres"
- password: "postgres"
- dialect : "postgres"

create DB 
- npx sequelize-cli db:create

## [CREATED MODEL]

JANGAN LUPA HARUS BERURUTAN

INGAT NAMA GK USAH PAKE S

##membuat_model/table
--npx sequelize-cli model:create --name Author --attributes name:string,age:integer,gender:string


##menjalakan_migrate
--npx sequelize-cli db:migrate

##UNDO MIGRATION
npx sequelize-cli db:migrate:undo:all

##bikin migration baru/(menambah colom baru)
npx sequelize-cli migration:create --name add-position-column-to-employee-table



## [ADD COLUMN FK]



##create_New_Migration
--npx sequelize-cli migration:create --name add-position-column-to-employee-table

JANGAN LUPA PAKE S
#query InterFace addColumn tableName,namaColumnFK,obj(type,referance)
---https://medium.com/@andrewoons/how-to-define-sequelize-associations-using-migrations-de4333bf75a7


 
## [MODEL]

--tambahkan di init key(namaFK): datatype
#STATTIC associate
**Scenario 1 – set custom foreignKey in your sequelize associations
---https://zditect.com/code/javascript/sequelize-associations-in-nodejs.html

**1:1 with custom foreignKey
--https://strapengine.com/sequelize-associations-in-nodejs/

## [SEDDING]

##membuat seeder
--npx sequelize-cli seed:create --name seeder-employee

- require fs
- readfileSyn
- hapus sync
- map data tambahkan createdAt new Date, updatedAt new Date
- up return queryInterface  bulkInsert TableName,data yg udah dimap, obj
- down return queryInterface  bulkDelete TableName, obj, obj
- npx sequelize-cli db:seed:all

## [EXPRESS]

---APP.JS----

- express helloworld
----https://expressjs.com/en/starter/hello-world.html

- view engine 
---- https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application-id

- urlencoded
---https://www.geeksforgeeks.org/express-js-express-urlencoded-function/
- require Controller

------Controller------
require Op (sequelize)
require Model(Model name)

then
catch

modul export controller

===========LIST================
*app
-masukan nama path

*controller

model findAll(include JIKA DIBUTUHKAN)

res render (nama ejs,obj data)


*ejs

-table
--https://getbootstrap.com/docs/5.0/content/tables/
-tr
--td
-tr
--th


=========ADD=======
*GET

*app
- JANGAN LUPA URLENCODED & VIEW ENGINE UDH TERPASANG
- masukan nama path,controller GET

*Contoller
- model findAll
-render ejs, obj data

*ejs
- form
--https://getbootstrap.com/docs/5.0/forms/overview/

-action ke path & method post

*POST

*App
- masukan nama path,controller POST

*Contoller
- ditractering request body
- model create
--https://sequelize.org/docs/v6/core-concepts/model-querying-basics/


===========DELETE=========

*App
-masukan nama peth GET

*Contoller
- reques params
- detroy
--https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
--FINDBYPK
---https://sequelize.org/docs/v6/core-concepts/model-querying-finders/#findbypk


===========SEARCH==========

*ejs
-form action peth method get
-input name search

*Contoller
- distract Search reques query


-query
--obj
---where obj
---include(jika dibutuhkan)

jika search ada maka
query where title Op ilike(cast sensitif) persen search persen

find all masukan query


===================HOOKS===================
-model baling bawah sebelum return dibawah init
- model beforeCreate
no.3
--https://sequelize.org/docs/v6/other-topics/hooks/


==================VALIDATION============
--https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/


==================INCREMENT====================
--https://stackoverflow.com/questions/55646233/updating-with-calculated-values-in-sequelize





# Sequelize Intro

Record 

- buat gitignore
- npm init

## 1. [Apa itu sequelize?](https://sequelize.org/v5/)

Promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.

## 2. [Install sequelize](https://sequelize.org/v5/manual/getting-started.html)
Jangan lupa, npm init dan .gitignore

Install sequelize.

commad: `npm install --save sequelize`

Install database driver. 

commad: `npm install --save pg`

## 3. [Install sequelize-cli](https://sequelize.org/master/manual/migrations.html)
Sequelize-cli adalah sebuah bantuan lagi dari sequelize, yang dapat mengenerate file2 yang nanti kita butuhkan dalam penggunaan sequlize.

commad: `npm install -D sequelize-cli`


## 4. [Initialize sequelize-cli](https://sequelize.org/v5/manual/migrations.html#installing-cli)
commad: `npx sequelize-cli init`

Init ini akan mengenerate 4 folder yaitu:

- config, contains config file, which tells CLI how to connect with database
- models, contains all models for your project
- migrations, contains all migration files
- seeders, contains all seed files

## 5. [Config sequelize](https://sequelize.org/v5/manual/migrations.html#installing-cli)
Sesuaikan credential untuk koneksi ke database ada di config/config.json.

## 6. [Help](https://sequelize.org/v5/manual/migrations.html#installing-cli)
Kalau bingung atau butuh bantuan, coba jalankan command `npx sequelize-cli help` atau lihat ke dokumentasi.

## 7. [Create database](https://sequelize.org/master/manual/migrations.html)
Buat database melalui sequelize.

commad: `npx sequelize-cli db:create`

## 8. [Generate model and migration](https://sequelize.org/v5/manual/migrations.html#creating-first-model--and-migration-)
Dengan generate model maka otomatis akan mengenerate juga migration, yang isinya adalah instruksi untuk membuat table dengan nama plural dari model beserta attributtes yang ada dalam table.

commad: `npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string,isActive:boolean`

kalau kita ingin melihat apa saja attribute yang ada di model:generate, bisa digunakan command `npx sequelize-cli model:generate --help`.  

[Tipe data di sequelize](https://sequelize.org/v5/manual/data-types.html)

## 9. [Running Migration](https://sequelize.org/v5/manual/migrations.html#running-migrations)
Menjalankan semua migration yang statusnya belum dijalankan.

commad: `npx sequelize-cli db:migrate`

Bisa juga mengundo migration

command: `npx sequelize-cli db:migrate:undo:all`

## 10. [Generate seeder](https://sequelize.org/v5/manual/migrations.html#creating-first-seed)
Mengenerate file seeder.

commad: `npx sequelize-cli seed:generate --name demo-user`

## 11. [Running seeder](https://sequelize.org/v5/manual/migrations.html#running-seeds)
Menjalankan semua seeder.

commad: `npx sequelize-cli db:seed:all`

## 12. Using model
Menggunakan model yang telah di generate oleh sequelize, bisa di require index dari folder model lalu diikuti dengan nama modelnya. 



## 13. [Get data](https://sequelize.org/v5/manual/querying.html) 
Menampilkan data dari table.
```
User
    findAll
    then
    catch
```
more detail: https://sequelize.org/v5/class/lib/model.js~Model.html#static-method-findAll

## 14. Migration dan Model itu SANGAT BERBEDA
`SANGAT BERBEDA`

TIDAK ADA HUBUNGANNYA SAMA SEKALI

Migration, berhubungan dengan struktur table 

Model, berhubungan dengan data yang ada dalam table 
# Referensi 
- https://sequelize.org/v5
- https://sequelize.org/v5/identifiers.html
- https://medium.com/wripolinema/sudah-kenal-sama-orm-34712e85c6fa
- https://medium.com/@Ayra_Lux/a-guide-to-orm-sequelize-c276c7b6dd18





































<!-- bulkInsert -->
harus array of object

<!-- jalankan seeding -->
npx sequelize-cli db:seed:all


npm init -y

.gitignore

<!-- install nodeModule -->
npm install sequelize pg

<!-- install CLI -->
npm install -D sequelize-cli


<!-- init(buat model,seeder, migration secara auto) -->
npx sequelize-cli init

<!-- create table secara otomatis diDBvers -->

npx sequelize-cli db:create



<!-- buat file di migration -->

npx sequelize-cli model:create --name TableName --attributes name:string,salary:integer,gender:string,

###asyn di hapus dan await diganti return

<!-- kalo udah ada terus mau maksa buat pake tambahkan  -->
--force

<!-- jalankan migration  -->

npx sequelize-cli db:migrate

<!-- undo migration -->
npx sequelize-cli db:migrate:undo:all

<!-- bikin migration baru/(menambah colom baru) -->

npx sequelize-cli migration:create --name add-position-column-to-employee-table

=======jangan lupa di return=====

<!-- seeder -->

npx sequelize-cli seed:create --name seeder-employee


<!-- bulkInsert -->
harus array of object

<!-- jalankan seeding -->
npx sequelize-cli db:seed:all


