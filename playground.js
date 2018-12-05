const myLib = require('./index')

const longJsonData = [
  {
    "_id": "5c081c4957ad18989bb97c20",
    "index": 0,
    "guid": "f1bb2181-133b-4d6f-a03c-6304a68165aa",
    "isActive": true,
    "balance": "$1,658.54",
    "picture": "http://placehold.it/32x32",
    "age": 23,
    "eyeColor": "brown",
    "name": "Jaclyn Fleming",
    "gender": "female",
    "company": "DANJA",
    "email": "jaclynfleming@danja.com",
    "phone": "+1 (965) 478-3209",
    "address": "413 Grattan Street, Rosewood, Illinois, 4261",
    "about": "Ea irure est est magna occaecat deserunt aliquip ea commodo minim adipisicing Lorem sunt elit. Laborum officia ipsum minim aliqua officia velit sunt amet commodo labore pariatur quis sint. Laboris ipsum enim ad tempor tempor ullamco veniam adipisicing velit consectetur. Consectetur occaecat cillum dolor proident aute ad cillum veniam eiusmod sunt laboris do cupidatat. Est occaecat laborum duis pariatur magna ut id. Esse sunt incididunt est adipisicing ut reprehenderit in magna.\r\n",
    "registered": "2015-07-08T08:39:30 +04:00",
    "latitude": -24.371402,
    "longitude": 21.449088,
    "tags": [
      "qui",
      "dolor",
      "dolore",
      "Lorem",
      "eu",
      "et",
      "fugiat"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Patty Luna"
      },
      {
        "id": 1,
        "name": "Murphy Noel"
      },
      {
        "id": 2,
        "name": "Casandra Alvarado"
      }
    ],
    "greeting": "Hello, Jaclyn Fleming! You have 2 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5c081c49e29c97e6f8c64d23",
    "index": 1,
    "guid": "0ef7264e-cd26-41d1-876e-447f39a72020",
    "isActive": false,
    "balance": "$3,221.08",
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "eyeColor": "brown",
    "name": "Simmons Melendez",
    "gender": "male",
    "company": "SNIPS",
    "email": "simmonsmelendez@snips.com",
    "phone": "+1 (857) 498-3164",
    "address": "126 Pitkin Avenue, Wattsville, Pennsylvania, 9751",
    "about": "Amet fugiat culpa ad elit veniam. Nulla esse labore consectetur consectetur do aute. Elit voluptate in occaecat voluptate culpa. Tempor cupidatat Lorem ipsum sunt ullamco nulla tempor cupidatat incididunt esse adipisicing nostrud veniam deserunt. Cupidatat labore laboris eu irure ad irure laborum duis non mollit dolore ut anim elit.\r\n",
    "registered": "2015-07-07T07:39:47 +04:00",
    "latitude": 42.231844,
    "longitude": 80.489223,
    "tags": [
      "ex",
      "officia",
      "consequat",
      "labore",
      "amet",
      "veniam",
      "eu"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Hawkins Leonard"
      },
      {
        "id": 1,
        "name": "Skinner Hart"
      },
      {
        "id": 2,
        "name": "Bird Fields"
      }
    ],
    "greeting": "Hello, Simmons Melendez! You have 3 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5c081c49a6e948b1d4013d92",
    "index": 2,
    "guid": "63689fce-e7f5-4894-89e3-5d136337eb3f",
    "isActive": true,
    "balance": "$1,786.03",
    "picture": "http://placehold.it/32x32",
    "age": 36,
    "eyeColor": "green",
    "name": "Kitty Barron",
    "gender": "female",
    "company": "QABOOS",
    "email": "kittybarron@qaboos.com",
    "phone": "+1 (981) 519-2975",
    "address": "143 Knickerbocker Avenue, Cade, Georgia, 9962",
    "about": "Consectetur in id officia adipisicing. Duis dolor irure aute non ut eiusmod cillum. Excepteur anim incididunt tempor ipsum magna in voluptate nostrud aliqua adipisicing esse minim. Veniam pariatur cupidatat voluptate mollit. Aute amet nostrud adipisicing non dolore proident ea officia in consequat incididunt est ipsum.\r\n",
    "registered": "2016-12-06T05:00:39 +05:00",
    "latitude": -46.398187,
    "longitude": 51.12286,
    "tags": [
      "eiusmod",
      "minim",
      "laborum",
      "velit",
      "laboris",
      "sint",
      "laboris"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Mayer Garza"
      },
      {
        "id": 1,
        "name": "Concetta Weiss"
      },
      {
        "id": 2,
        "name": "Caitlin Key"
      }
    ],
    "greeting": "Hello, Kitty Barron! You have 4 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5c081c490c88b91ca71598d5",
    "index": 3,
    "guid": "2c15038d-2c77-4368-bd13-0df3d732439b",
    "isActive": false,
    "balance": "$1,704.85",
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "eyeColor": "brown",
    "name": "Lane Sandoval",
    "gender": "male",
    "company": "BALUBA",
    "email": "lanesandoval@baluba.com",
    "phone": "+1 (861) 538-2866",
    "address": "939 Lake Place, Westerville, Louisiana, 2062",
    "about": "Officia aliquip exercitation et quis consequat non. Velit dolore culpa dolore qui do anim ipsum officia excepteur quis et laborum occaecat magna. Irure proident ut mollit officia nulla. Eiusmod proident esse anim cupidatat veniam minim qui duis pariatur excepteur. Ipsum aliquip dolore consequat et reprehenderit reprehenderit dolore minim amet velit non commodo velit aute.\r\n",
    "registered": "2016-09-12T10:28:27 +04:00",
    "latitude": 6.22696,
    "longitude": 155.984465,
    "tags": [
      "occaecat",
      "enim",
      "labore",
      "nulla",
      "minim",
      "minim",
      "reprehenderit"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Myrna Montgomery"
      },
      {
        "id": 1,
        "name": "Mccullough Dale"
      },
      {
        "id": 2,
        "name": "Rosanne Dominguez"
      }
    ],
    "greeting": "Hello, Lane Sandoval! You have 7 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5c081c499d2401b52c8e95d1",
    "index": 4,
    "guid": "4e2bfc3b-8e07-4545-9075-cb36b74c7833",
    "isActive": true,
    "balance": "$2,011.11",
    "picture": "http://placehold.it/32x32",
    "age": 39,
    "eyeColor": "blue",
    "name": "Katy Keller",
    "gender": "female",
    "company": "COMTRACT",
    "email": "katykeller@comtract.com",
    "phone": "+1 (802) 423-2985",
    "address": "932 Court Square, Genoa, New Jersey, 3908",
    "about": "Deserunt anim incididunt culpa adipisicing labore veniam eu sunt sunt irure. Id Lorem id deserunt aliquip nulla. Nostrud culpa ipsum labore consequat ipsum Lorem do. Ex cupidatat aliquip anim in est consectetur. Cillum voluptate est laborum exercitation irure adipisicing. Cupidatat minim ex quis eiusmod qui voluptate nisi esse ea laboris ex et. Nisi adipisicing mollit ullamco occaecat.\r\n",
    "registered": "2017-02-22T10:54:28 +05:00",
    "latitude": 12.318313,
    "longitude": -129.683464,
    "tags": [
      "labore",
      "voluptate",
      "incididunt",
      "esse",
      "ipsum",
      "id",
      "et"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Atkins Abbott"
      },
      {
        "id": 1,
        "name": "Marshall Wolf"
      },
      {
        "id": 2,
        "name": "Rae Glass"
      }
    ],
    "greeting": "Hello, Katy Keller! You have 3 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5c081c491dd14352c766b1b3",
    "index": 5,
    "guid": "7b2af439-eb59-4ff6-9c69-f354cdde1fa2",
    "isActive": true,
    "balance": "$2,279.39",
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "eyeColor": "brown",
    "name": "Summer Lawrence",
    "gender": "female",
    "company": "LYRICHORD",
    "email": "summerlawrence@lyrichord.com",
    "phone": "+1 (918) 465-3250",
    "address": "919 Tennis Court, Hegins, Nevada, 4170",
    "about": "Ullamco mollit dolor ad sint ad veniam non mollit. Lorem ea ad velit sit amet. Id in deserunt Lorem minim eiusmod qui laborum incididunt ea labore pariatur. Quis veniam excepteur minim aliqua. Laborum non veniam consectetur dolore proident cupidatat eiusmod.\r\n",
    "registered": "2015-02-16T03:05:35 +05:00",
    "latitude": 35.497726,
    "longitude": 104.827275,
    "tags": [
      "adipisicing",
      "occaecat",
      "ad",
      "proident",
      "laboris",
      "laboris",
      "voluptate"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Keller Fernandez"
      },
      {
        "id": 1,
        "name": "Bentley Osborne"
      },
      {
        "id": 2,
        "name": "Stein Benson"
      }
    ],
    "greeting": "Hello, Summer Lawrence! You have 8 unread messages.",
    "favoriteFruit": "strawberry"
  }
]

myLib.create('json', 'data', {'quux': 'norf'}, function(err) {
  console.log('There seems to be an error' , err)
})

// myLib.update('json', 'data', longJsonData, function(err) {
//   console.log('Something bad happened' , err)
// })
