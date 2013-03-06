/**
 * @name test.core.trade
 * @namespace Tests for core.trade.
 */
define([], function () {
    "use strict";

    var firstNames, lastNames, nickNames;

    // http://www.census.gov/genealogy/www/data/1990surnames/names_files.html
    firstNames = [];

    // http://www.census.gov/genealogy/www/data/1990surnames/names_files.html
    lastNames = [];

    // http://en.wikipedia.org/wiki/List_of_nicknames_used_in_basketball on 2012-02-02
    nickNames = ["Cap",
                 "Ray Ray",
                 "Sugar Ray",
                 "Jesus Shuttlesworth",
                 "Skip To My Lou",
                 "Birdman",
                 "Cadillac",
                 "Melo",
                 "Tiny",
                 "Cobra",
                 "Pitchin' Paul",
                 "Plastic Man",
                 "The Animal",
                 "Il Mago",
                 "Chuck",
                 "The Round Mound of Rebound",
                 "Sir Charles",
                 "Prince Charles",
                 "Leaning Tower of Pizza",
                 "Pillsbury Dough Boy",
                 "The Human Refrigerator",
                 "The Flying Coke Machine",
                 "The Crisco Kid",
                 "Boy Gorge",
                 "Bad News",
                 "Bad News",
                 "Fall Back Baby",
                 "Hound",
                 "Butch",
                 "Beli",
                 "Bells",
                 "The Hick from French Lick",
                 "Larry Legend",
                 "Mookie",
                 "Mini Lebron",
                 "Muggsy",
                 "CB4",
                 "Dollar Bill",
                 "The Secretary of State",
                 "Mr. President",
                 "Brick",
                 "The Brockness Monster",
                 "Downtown Freddie",
                 "from downtown",
                 "Jellybean",
                 "Black Mamba",
                 "Pogo",
                 "Jumping Joe",
                 "The Custodian",
                 "Big Dog",
                 "Air Canada",
                 "Vinsanity",
                 "Half Man Half Amazing",
                 "Sam I Am",
                 "Wilt the Stilt",
                 "The Big Dipper",
                 "Band-Aid",
                 "Speedy",
                 "The Elevator Man",
                 "Bimbo",
                 "The Houdini of the Hardwood",
                 "Frosty",
                 "Kangaroo Kid",
                 "Bobby D",
                 "Killer",
                 "Big Baby",
                 "Uno-Uno",
                 "Ricky Buckets",
                 "Wrong Rim Ricky",
                 "Chocolate Thunder",
                 "Clyde the Glide",
                 "The Big Fundamental",
                 "Slam Duncan",
                 "TD",
                 "Timmy D",
                 "Durantula",
                 "KD",
                 "Blue",
                 "Never Nervous Pervis",
                 "Dr. J",
                 "D-Fish",
                 "Sleepy",
                 "Bevo",
                 "Stevie Franchise",
                 "Clyde",
                 "World B. Free",
                 "The Prince of Midair",
                 "The Flighing Dutchman",
                 "The Horse",
                 "Go-Go Gadget Arms",
                 "Big Ticket",
                 "KG",
                 "The Kid",
                 "Iceberg Slim",
                 "The Iceman",
                 "Ice",
                 "Boobie",
                 "The Hammer",
                 "A Train",
                 "The Blind Bomber",
                 "Madison Square Gordon",
                 "The Polish Hammer",
                 "Tiny",
                 "Machine Gun",
                 "Dr. Dunkenstein",
                 "Ace",
                 "Googs",
                 "Happy",
                 "Rip",
                 "The Terminator",
                 "Penny",
                 "pretty",
                 "Hondo",
                 "Czech",
                 "The Big E",
                 "E",
                 "Ack Ack",
                 "Tommy Gun",
                 "Tommy Points",
                 "G",
                 "G-money",
                 "Dr. Dunk",
                 "The Mayor",
                 "(The) L-Train",
                 "Red",
                 "Big Shot Rob",
                 "Big Shot Bob",
                 "Superman",
                 "Foul on You",
                 "D12",
                 "DH12",
                 "Hot Rod",
                 "Air Congo",
                 "I-block-a",
                 "Serge Protector",
                 "The Dean of Denial",
                 "Big Z",
                 "Turkish Thunder",
                 "The Answer",
                 "AI",
                 "Captain Jack",
                 "(The) L-Train",
                 "King James",
                 "The Akron Hammer",
                 "LBJ",
                 "The King",
                 "DJ",
                 "Magic",
                 "Buck",
                 "E.J.",
                 "Honeycomb",
                 "Grandmama",
                 "The Microwave",
                 "The World's Greatest Shooter",
                 "Popeye",
                 "Air Jordan",
                 "His Airness",
                 "MJ",
                 "The Judge",
                 "Special K",
                 "The Reignman",
                 "JK",
                 "JKidd",
                 "AK47",
                 "Croatian Sensation",
                 "The Waiter",
                 "Euro-Magic",
                 "Fat",
                 "Lady Magic",
                 "Lin-sanity",
                 "Super-Lintendo",
                 "All He Does Is Lin",
                 "Jungle Jim",
                 "Loscy",
                 "Butterbean",
                 "Easy",
                 "Thunder Dan",
                 "The Mailman",
                 "The Goat",
                 "Pistol Pete",
                 "Starbury",
                 "The Matrix",
                 "Cornbread",
                 "The X-Man",
                 "Dice",
                 "Jonny Mac",
                 "T-Mac",
                 "Tricky Dick",
                 "Herman Munster",
                 "The Black Hole",
                 "The Dream",
                 "The Human Victory Cigar",
                 "Baby Jordan",
                 "The Owl without a Vowel",
                 "Black Magic",
                 "Earl the Pearl",
                 "Black Jesus",
                 "D-Mo",
                 "Zo",
                 "Stretch",
                 "Flip",
                 "The Horse",
                 "Captain Canada",
                 "Hair Canada",
                 "Curly",
                 "Mighty Mouse",
                 "Crib Midget",
                 "The Candy Man",
                 "Memo",
                 "Shaq",
                 "Shaq Daddy",
                 "Shaq Fu",
                 "Diesel",
                 "The Big Aristotle",
                 "Superman",
                 "MDE",
                 "The Big Maravich",
                 "The Big Fella",
                 "The Big Shaqtus",
                 "The Big Cordially",
                 "Big Shamrock",
                 "The Dream",
                 "Kandi Man",
                 "Smush",
                 "The Chief",
                 "The Kobe Stopper",
                 "CP3",
                 "The Whopper",
                 "The Glove",
                 "held",
                 "baseball in a glove",
                 "Big Smooth",
                 "Socks",
                 "The Rifleman",
                 "The Truth",
                 "Big Paper Daddy",
                 "Kangaroo Kid",
                 "Little Drummer Boy",
                 "Ukraine Train",
                 "Vanilla Gorilla",
                 "Z-Bo",
                 "Big Country",
                 "Pooh",
                 "Rags",
                 "Doc",
                 "The Admiral",
                 "Big Dog",
                 "Truck",
                 "The Big O",
                 "The Disappearing O",
                 "The Worm",
                 "Tree",
                 "D Rose",
                 "Sabas",
                 "Spider",
                 "Satch",
                 "Satch Sanders",
                 "White Mamba",
                 "The Jewish Jordan",
                 "Sky",
                 "Timber",
                 "3D",
                 "Captain Late",
                 "The Snake",
                 "The Late Mr. Silas",
                 "Bingo",
                 "Rhino",
                 "J-Smoove",
                 "Mr. Mean",
                 "Spree",
                 "The Rave",
                 "STAT",
                 "JET",
                 "Zeke",
                 "Cuts",
                 "The Baby-Faced Assassin",
                 "The Skywalker",
                 "The Thief",
                 "The Boston Strangler",
                 "killing",
                 "Tractor Traylor",
                 "Golden Arches",
                 "Nasty Nick",
                 "Nick Van Excellent",
                 "Nick the Quick",
                 "Wild Thing",
                 "Human Victory Cigar",
                 "Flash",
                 "D-Wade",
                 "The Jet",
                 "Foots",
                 "Big Ben",
                 "Crash",
                 "Sheed",
                 "Slick",
                 "Spoon",
                 "Spud",
                 "C-Webb",
                 "Human Eraser",
                 "Mr. Clutch",
                 "The Logo",
                 "Zeke from Cabin Creek",
                 "Fly",
                 "D-Will",
                 "White Chocolate",
                 "The Junkyard Dog",
                 "Hot Rod",
                 "Silk",
                 "The Human Highlight Reel",
                 "Nique",
                 "Big Nasty",
                 "Poodles",
                 "The India Rubber Man",
                 "Ron Ron",
                 "Big Game James",
                 "Chairman Yao",
                 "Shaquie Chan",
                 "The Great Wall of Yao",
                 "Slats"];

    return {
        firstNames: firstNames,
        lastNames: lastNames,
        nickNames: nickNames
    };
});