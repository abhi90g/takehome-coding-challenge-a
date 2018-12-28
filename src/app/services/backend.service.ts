import { InMemoryDbService } from "angular-in-memory-web-api";

export class FakeBackendService implements InMemoryDbService {
    createDb() {
        let companyData = [
            {
                "id": 1,
                "company_name": "Topicstorm",
                "status": "Declined",
                "info": "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
                "performance": "Good",
                "key_contacts": {
                    "first_contact": "Rossie",
                    "second_contact": "Carline"
                },
                "website": "https://sogou.com",
                "address": {
                    "street": "882 Marcy Circle",
                    "city": "Escondido",
                    "state": "California",
                    "zip": "92030"
                },
                "company_phone": "760-770-7399",
                "revenue": {
                    "2016 q1": "$24493625.75",
                    "2016 q2": "$2652835.21",
                    "2016 q3": "$30488229.15",
                    "2016 q4": "$96368706.06",
                    "2017 q1": "$46442028.56",
                    "2017 q2": "$46648166.82",
                    "2017 q3": "$10615878.59",
                    "2017 q4": "$5171345.26",
                    "2018 q1": "$79334388.64",
                    "2018 q2": "$49088238.01",
                    "2018 q3": "$76313459.70"
                },
                "ebitda": {
                    "2016 q1": "$483231.36",
                    "2016 q2": "$427266.92",
                    "2016 q3": "$1532197.20",
                    "2016 q4": "$1540673.24",
                    "2017 q1": "$426460.49",
                    "2017 q2": "$1677140.91",
                    "2017 q3": "$586926.05",
                    "2017 q4": "$1553946.17",
                    "2018 q1": "$348883.70",
                    "2018 q2": "$1697122.25",
                    "2018 q3": "$1619292.68"
                }
            },
            {
                "id": 2,
                "company_name": "Demizz",
                "status": "Declined",
                "info": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
                "performance": "Moderate",
                "key_contacts": {
                    "first_contact": "Lothaire",
                    "second_contact": "Sibel"
                },
                "website": "http://independent.co.uk",
                "address": {
                    "street": "578 Summer Ridge Avenue",
                    "city": "Charlotte",
                    "state": "North Carolina",
                    "zip": "28278"
                },
                "company_phone": "704-487-3018",
                "revenue": {
                    "2016 q1": "$63133812.24",
                    "2016 q2": "$56933242.57",
                    "2016 q3": "$41556314.91",
                    "2016 q4": "$37808025.08",
                    "2017 q1": "$1771331.75",
                    "2017 q2": "$35220026.41",
                    "2017 q3": "$36112017.63",
                    "2017 q4": "$14847336.08",
                    "2018 q1": "$93232014.39",
                    "2018 q2": "$17092106.86",
                    "2018 q3": "$41490510.12"
                },
                "ebitda": {
                    "2016 q1": "$404692.98",
                    "2016 q2": "$1429184.86",
                    "2016 q3": "$151337.01",
                    "2016 q4": "$1452508.61",
                    "2017 q1": "$1513843.38",
                    "2017 q2": "$188236.95",
                    "2017 q3": "$1356221.98",
                    "2017 q4": "$588276.81",
                    "2018 q1": "$1942987.91",
                    "2018 q2": "$1569941.93",
                    "2018 q3": "$1768480.03"
                }
            },
            {
                "id": 3,
                "company_name": "Cogidoo",
                "status": "Declined",
                "info": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
                "performance": "Good",
                "key_contacts": {
                    "first_contact": "Taber",
                    "second_contact": "Mireielle"
                },
                "website": "http://chron.com",
                "address": {
                    "street": "158 Vernon Terrace",
                    "city": "San Jose",
                    "state": "California",
                    "zip": "95155"
                },
                "company_phone": "408-882-6676",
                "revenue": {
                    "2016 q1": "$78934401.55",
                    "2016 q2": "$45409762.86",
                    "2016 q3": "$69956607.44",
                    "2016 q4": "$63034187.16",
                    "2017 q1": "$53807779.95",
                    "2017 q2": "$12136989.37",
                    "2017 q3": "$59809785.05",
                    "2017 q4": "$12245424.03",
                    "2018 q1": "$42943325.63",
                    "2018 q2": "$68539106.72",
                    "2018 q3": "$12952468.80"
                },
                "ebitda": {
                    "2016 q1": "$262649.62",
                    "2016 q2": "$468436.48",
                    "2016 q3": "$990277.70",
                    "2016 q4": "$1929455.43",
                    "2017 q1": "$680556.15",
                    "2017 q2": "$1049506.04",
                    "2017 q3": "$385521.60",
                    "2017 q4": "$1897687.07",
                    "2018 q1": "$1129974.33",
                    "2018 q2": "$729457.56",
                    "2018 q3": "$213359.46"
                }
            },
            {
                "id": 4,
                "company_name": "Realblab",
                "status": "Declined",
                "info": "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
                "performance": "Good",
                "key_contacts": {
                    "first_contact": "Port",
                    "second_contact": "Blisse"
                },
                "website": "http://webmd.com",
                "address": {
                    "street": "7 Corry Alley",
                    "city": "Lexington",
                    "state": "Kentucky",
                    "zip": "40515"
                },
                "company_phone": "859-586-6203",
                "revenue": {
                    "2016 q1": "$25083523.53",
                    "2016 q2": "$68744394.43",
                    "2016 q3": "$98864661.16",
                    "2016 q4": "$86945122.66",
                    "2017 q1": "$87063485.48",
                    "2017 q2": "$80867940.77",
                    "2017 q3": "$97345083.14",
                    "2017 q4": "$76303064.01",
                    "2018 q1": "$39006183.27",
                    "2018 q2": "$52190615.45",
                    "2018 q3": "$53436832.95"
                },
                "ebitda": {
                    "2016 q1": "$301512.68",
                    "2016 q2": "$1740427.76",
                    "2016 q3": "$1568339.09",
                    "2016 q4": "$1390082.37",
                    "2017 q1": "$188110.41",
                    "2017 q2": "$1341365.33",
                    "2017 q3": "$1369739.69",
                    "2017 q4": "$1508287.93",
                    "2018 q1": "$1688018.61",
                    "2018 q2": "$234703.44",
                    "2018 q3": "$1252093.92"
                }
            },
            {
                "id": 5,
                "company_name": "Babbleopia",
                "status": "Declined",
                "info": "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
                "performance": "Moderate",
                "key_contacts": {
                    "first_contact": "Orton",
                    "second_contact": "Melitta"
                },
                "website": "http://pcworld.com",
                "address": {
                    "street": "069 Novick Point",
                    "city": "Tallahassee",
                    "state": "Florida",
                    "zip": "32314"
                },
                "company_phone": "850-935-7178",
                "revenue": {
                    "2016 q1": "$10092348.85",
                    "2016 q2": "$83822155.44",
                    "2016 q3": "$78745483.30",
                    "2016 q4": "$71566033.40",
                    "2017 q1": "$87055543.81",
                    "2017 q2": "$29708169.80",
                    "2017 q3": "$1384987.38",
                    "2017 q4": "$50492161.55",
                    "2018 q1": "$58720814.29",
                    "2018 q2": "$3886586.95",
                    "2018 q3": "$95487895.05"
                },
                "ebitda": {
                    "2016 q1": "$443663.15",
                    "2016 q2": "$1843791.33",
                    "2016 q3": "$1216400.48",
                    "2016 q4": "$264523.89",
                    "2017 q1": "$1817541.21",
                    "2017 q2": "$1878517.94",
                    "2017 q3": "$1743695.80",
                    "2017 q4": "$1947138.68",
                    "2018 q1": "$1097991.11",
                    "2018 q2": "$1872644.12",
                    "2018 q3": "$1673785.53"
                }
            },
            {
                "id": 6,
                "company_name": "Aibox",
                "status": "Declined",
                "info": "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
                "performance": "Good",
                "key_contacts": {
                    "first_contact": "Reube",
                    "second_contact": "Dolly"
                },
                "website": "https://is.gd",
                "address": {
                    "street": "2113 Bluejay Parkway",
                    "city": "Tyler",
                    "state": "Texas",
                    "zip": "75705"
                },
                "company_phone": "903-760-3159",
                "revenue": {
                    "2016 q1": "$55921301.07",
                    "2016 q2": "$44114148.04",
                    "2016 q3": "$17490393.23",
                    "2016 q4": "$28412133.10",
                    "2017 q1": "$68190971.92",
                    "2017 q2": "$51029347.30",
                    "2017 q3": "$32184477.98",
                    "2017 q4": "$43845570.91",
                    "2018 q1": "$37268262.38",
                    "2018 q2": "$35514950.44",
                    "2018 q3": "$4304689.86"
                },
                "ebitda": {
                    "2016 q1": "$1772830.68",
                    "2016 q2": "$1070393.20",
                    "2016 q3": "$789602.02",
                    "2016 q4": "$695158.37",
                    "2017 q1": "$1263651.88",
                    "2017 q2": "$587898.99",
                    "2017 q3": "$1406203.32",
                    "2017 q4": "$1523802.53",
                    "2018 q1": "$605794.87",
                    "2018 q2": "$1694526.67",
                    "2018 q3": "$1820957.81"
                }
            },
            {
                "id": 7,
                "company_name": "Voomm",
                "status": "Approved",
                "info": "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
                "performance": "Good",
                "key_contacts": {
                    "first_contact": "Felizio",
                    "second_contact": "Lillian"
                },
                "website": "https://imageshack.us",
                "address": {
                    "street": "39 Waubesa Alley",
                    "city": "Shreveport",
                    "state": "Louisiana",
                    "zip": "71105"
                },
                "company_phone": "318-683-9127",
                "revenue": {
                    "2016 q1": "$25497639.04",
                    "2016 q2": "$47988869.58",
                    "2016 q3": "$40098371.69",
                    "2016 q4": "$17273510.71",
                    "2017 q1": "$28187997.54",
                    "2017 q2": "$55306867.32",
                    "2017 q3": "$72795779.93",
                    "2017 q4": "$82138404.59",
                    "2018 q1": "$98310382.29",
                    "2018 q2": "$54471937.44",
                    "2018 q3": "$3938797.99"
                },
                "ebitda": {
                    "2016 q1": "$1193847.48",
                    "2016 q2": "$903444.70",
                    "2016 q3": "$1638390.08",
                    "2016 q4": "$364642.21",
                    "2017 q1": "$258917.54",
                    "2017 q2": "$1234027.72",
                    "2017 q3": "$1931651.83",
                    "2017 q4": "$1264581.02",
                    "2018 q1": "$542680.86",
                    "2018 q2": "$1369108.53",
                    "2018 q3": "$512786.30"
                }
            },
            {
                "id": 8,
                "company_name": "Browsezoom",
                "status": "Approved",
                "info": "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
                "performance": "Good",
                "key_contacts": {
                    "first_contact": "Amory",
                    "second_contact": "Lib"
                },
                "website": "http://psu.edu",
                "address": {
                    "street": "96 Sunfield Circle",
                    "city": "Missoula",
                    "state": "Montana",
                    "zip": "59806"
                },
                "company_phone": "406-655-0248",
                "revenue": {
                    "2016 q1": "$85093574.22",
                    "2016 q2": "$37604509.10",
                    "2016 q3": "$10976209.49",
                    "2016 q4": "$69838720.31",
                    "2017 q1": "$29575485.23",
                    "2017 q2": "$84095860.49",
                    "2017 q3": "$87635980.15",
                    "2017 q4": "$93167482.28",
                    "2018 q1": "$51334587.37",
                    "2018 q2": "$44460024.93",
                    "2018 q3": "$56528112.18"
                },
                "ebitda": {
                    "2016 q1": "$840836.78",
                    "2016 q2": "$1798749.58",
                    "2016 q3": "$699225.77",
                    "2016 q4": "$1249203.22",
                    "2017 q1": "$1211874.73",
                    "2017 q2": "$1462436.54",
                    "2017 q3": "$1776385.55",
                    "2017 q4": "$1691813.33",
                    "2018 q1": "$670553.81",
                    "2018 q2": "$1565949.12",
                    "2018 q3": "$1568007.74"
                }
            },
            {
                "id": 9,
                "company_name": "Thoughtworks",
                "status": "Approved",
                "info": "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
                "performance": "Good",
                "key_contacts": {
                    "first_contact": "Thayne",
                    "second_contact": "Dorry"
                },
                "website": "http://weather.com",
                "address": {
                    "street": "7652 Northport Alley",
                    "city": "Clearwater",
                    "state": "Florida",
                    "zip": "33763"
                },
                "company_phone": "727-154-5604",
                "revenue": {
                    "2016 q1": "$93050706.37",
                    "2016 q2": "$71754583.97",
                    "2016 q3": "$51064668.77",
                    "2016 q4": "$65779762.34",
                    "2017 q1": "$37906573.62",
                    "2017 q2": "$75139834.70",
                    "2017 q3": "$10531971.62",
                    "2017 q4": "$17515427.30",
                    "2018 q1": "$41991503.78",
                    "2018 q2": "$95141040.40",
                    "2018 q3": "$8602194.59"
                },
                "ebitda": {
                    "2016 q1": "$1759188.07",
                    "2016 q2": "$1603356.93",
                    "2016 q3": "$1733235.93",
                    "2016 q4": "$1723374.58",
                    "2017 q1": "$989004.47",
                    "2017 q2": "$947039.27",
                    "2017 q3": "$104369.84",
                    "2017 q4": "$1562042.73",
                    "2018 q1": "$1587310.49",
                    "2018 q2": "$353317.75",
                    "2018 q3": "$1981319.06"
                }
            },
            {
                "id": 10,
                "company_name": "Demivee",
                "status": "Approved",
                "info": "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
                "performance": "Good",
                "key_contacts": {
                    "first_contact": "Shepherd",
                    "second_contact": "Dorree"
                },
                "website": "https://blog.com",
                "address": {
                    "street": "3 Shoshone Trail",
                    "city": "Lakewood",
                    "state": "Washington",
                    "zip": "98498"
                },
                "company_phone": "253-198-4387",
                "revenue": {
                    "2016 q1": "$16817891.17",
                    "2016 q2": "$8122581.28",
                    "2016 q3": "$54498951.79",
                    "2016 q4": "$80054680.62",
                    "2017 q1": "$71738802.93",
                    "2017 q2": "$59814448.96",
                    "2017 q3": "$1649061.19",
                    "2017 q4": "$88972618.81",
                    "2018 q1": "$97953120.77",
                    "2018 q2": "$3744219.19",
                    "2018 q3": "$13453536.35"
                },
                "ebitda": {
                    "2016 q1": "$125701.24",
                    "2016 q2": "$1397634.45",
                    "2016 q3": "$862496.56",
                    "2016 q4": "$1837014.44",
                    "2017 q1": "$773894.61",
                    "2017 q2": "$1522675.64",
                    "2017 q3": "$1226216.33",
                    "2017 q4": "$1766893.52",
                    "2018 q1": "$1424439.11",
                    "2018 q2": "$205572.11",
                    "2018 q3": "$1106135.76"
                }
            },
            {
                "id": 11,
                "company_name": "Babblestorm",
                "status": "Approved",
                "info": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
                "performance": "Good",
                "key_contacts": {
                    "first_contact": "Dimitry",
                    "second_contact": "Chryste"
                },
                "website": "https://pen.io",
                "address": {
                    "street": "47 Vahlen Point",
                    "city": "Memphis",
                    "state": "Tennessee",
                    "zip": "38114"
                },
                "company_phone": "901-247-9280",
                "revenue": {
                    "2016 q1": "$88526759.03",
                    "2016 q2": "$7331019.44",
                    "2016 q3": "$23187651.47",
                    "2016 q4": "$31368627.27",
                    "2017 q1": "$8939272.82",
                    "2017 q2": "$28230081.88",
                    "2017 q3": "$26376141.69",
                    "2017 q4": "$16893009.58",
                    "2018 q1": "$15622767.81",
                    "2018 q2": "$45304594.72",
                    "2018 q3": "$44454810.97"
                },
                "ebitda": {
                    "2016 q1": "$669382.30",
                    "2016 q2": "$123492.52",
                    "2016 q3": "$1964784.61",
                    "2016 q4": "$1737892.49",
                    "2017 q1": "$1661559.55",
                    "2017 q2": "$1412408.01",
                    "2017 q3": "$615684.60",
                    "2017 q4": "$798136.40",
                    "2018 q1": "$390960.76",
                    "2018 q2": "$1866087.67",
                    "2018 q3": "$756942.50"
                }
            },
            {
                "id": 12,
                "company_name": "Photobug",
                "status": "Approved",
                "info": "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
                "performance": "Excellent",
                "key_contacts": {
                    "first_contact": "Ed",
                    "second_contact": "Opaline"
                },
                "website": "http://uol.com.br",
                "address": {
                    "street": "2 Arrowood Park",
                    "city": "Concord",
                    "state": "California",
                    "zip": "94522"
                },
                "company_phone": "925-850-6485",
                "revenue": {
                    "2016 q1": "$15471447.15",
                    "2016 q2": "$6872264.95",
                    "2016 q3": "$32219517.30",
                    "2016 q4": "$57894357.63",
                    "2017 q1": "$68100768.78",
                    "2017 q2": "$25456594.74",
                    "2017 q3": "$83837597.39",
                    "2017 q4": "$47862947.15",
                    "2018 q1": "$41479247.50",
                    "2018 q2": "$89110522.77",
                    "2018 q3": "$70809911.89"
                },
                "ebitda": {
                    "2016 q1": "$913734.46",
                    "2016 q2": "$493993.17",
                    "2016 q3": "$666426.63",
                    "2016 q4": "$971785.65",
                    "2017 q1": "$1601934.98",
                    "2017 q2": "$116086.78",
                    "2017 q3": "$1176583.26",
                    "2017 q4": "$421063.09",
                    "2018 q1": "$414265.24",
                    "2018 q2": "$359504.70",
                    "2018 q3": "$138474.17"
                }
            },
            {
                "id": 13,
                "company_name": "Shufflebeat",
                "status": "Approved",
                "info": "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
                "performance": "Excellent",
                "key_contacts": {
                    "first_contact": "Bink",
                    "second_contact": "Nike"
                },
                "website": "http://moonfruit.com",
                "address": {
                    "street": "25394 Lakewood Drive",
                    "city": "Clearwater",
                    "state": "Florida",
                    "zip": "34629"
                },
                "company_phone": "727-490-6117",
                "revenue": {
                    "2016 q1": "$73012092.65",
                    "2016 q2": "$58890447.65",
                    "2016 q3": "$40940312.25",
                    "2016 q4": "$26048091.90",
                    "2017 q1": "$4782784.35",
                    "2017 q2": "$14859008.28",
                    "2017 q3": "$62842912.37",
                    "2017 q4": "$5366838.37",
                    "2018 q1": "$74283893.22",
                    "2018 q2": "$89107634.60",
                    "2018 q3": "$73083676.12"
                },
                "ebitda": {
                    "2016 q1": "$1065111.42",
                    "2016 q2": "$1193266.15",
                    "2016 q3": "$1388385.45",
                    "2016 q4": "$1140034.41",
                    "2017 q1": "$868488.14",
                    "2017 q2": "$1066769.95",
                    "2017 q3": "$134043.70",
                    "2017 q4": "$222943.77",
                    "2018 q1": "$1295622.65",
                    "2018 q2": "$405023.87",
                    "2018 q3": "$1186220.93"
                }
            },
            {
                "id": 14,
                "company_name": "Topicstorm",
                "status": "Approved",
                "info": "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
                "performance": "Good",
                "key_contacts": {
                    "first_contact": "Mario",
                    "second_contact": "Kimmy"
                },
                "website": "http://yahoo.co.jp",
                "address": {
                    "street": "424 Summerview Parkway",
                    "city": "Fort Lauderdale",
                    "state": "Florida",
                    "zip": "33336"
                },
                "company_phone": "754-627-3940",
                "revenue": {
                    "2016 q1": "$53226139.44",
                    "2016 q2": "$59875922.84",
                    "2016 q3": "$78860801.96",
                    "2016 q4": "$40478720.01",
                    "2017 q1": "$17171038.00",
                    "2017 q2": "$15576487.28",
                    "2017 q3": "$57580120.19",
                    "2017 q4": "$93701867.44",
                    "2018 q1": "$26454827.49",
                    "2018 q2": "$96541502.68",
                    "2018 q3": "$50863840.00"
                },
                "ebitda": {
                    "2016 q1": "$268942.77",
                    "2016 q2": "$617430.83",
                    "2016 q3": "$238763.88",
                    "2016 q4": "$269148.31",
                    "2017 q1": "$1456668.99",
                    "2017 q2": "$1600441.56",
                    "2017 q3": "$220053.03",
                    "2017 q4": "$491595.02",
                    "2018 q1": "$1566889.16",
                    "2018 q2": "$1464963.79",
                    "2018 q3": "$1244395.95"
                }
            },
            {
                "id": 15,
                "company_name": "Kaymbo",
                "status": "Approved",
                "info": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
                "performance": "Excellent",
                "key_contacts": {
                    "first_contact": "Wilfred",
                    "second_contact": "Deidre"
                },
                "website": "https://bloglines.com",
                "address": {
                    "street": "79 Del Sol Plaza",
                    "city": "Phoenix",
                    "state": "Arizona",
                    "zip": "85067"
                },
                "company_phone": "602-436-0741",
                "revenue": {
                    "2016 q1": "$70130364.49",
                    "2016 q2": "$83275459.44",
                    "2016 q3": "$5940672.73",
                    "2016 q4": "$29656172.43",
                    "2017 q1": "$37523512.70",
                    "2017 q2": "$84246432.11",
                    "2017 q3": "$29797286.55",
                    "2017 q4": "$7898139.44",
                    "2018 q1": "$55558920.34",
                    "2018 q2": "$38071590.30",
                    "2018 q3": "$86441451.84"
                },
                "ebitda": {
                    "2016 q1": "$423257.71",
                    "2016 q2": "$527072.32",
                    "2016 q3": "$760425.09",
                    "2016 q4": "$1891556.60",
                    "2017 q1": "$757430.22",
                    "2017 q2": "$1783673.45",
                    "2017 q3": "$1658338.54",
                    "2017 q4": "$1295826.61",
                    "2018 q1": "$444276.47",
                    "2018 q2": "$1372667.97",
                    "2018 q3": "$1056920.65"
                }
            },
            {
                "id": 16,
                "company_name": "Tagfeed",
                "status": "Approved",
                "info": "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
                "performance": "Good",
                "key_contacts": {
                    "first_contact": "Avrom",
                    "second_contact": "Henrie"
                },
                "website": "https://tmall.com",
                "address": {
                    "street": "1 Huxley Hill",
                    "city": "Lancaster",
                    "state": "California",
                    "zip": "93584"
                },
                "company_phone": "661-325-1959",
                "revenue": {
                    "2016 q1": "$11963173.33",
                    "2016 q2": "$71204059.23",
                    "2016 q3": "$65226414.94",
                    "2016 q4": "$5728426.37",
                    "2017 q1": "$6388273.64",
                    "2017 q2": "$68248117.78",
                    "2017 q3": "$2270257.99",
                    "2017 q4": "$17961701.42",
                    "2018 q1": "$12103400.71",
                    "2018 q2": "$97743421.56",
                    "2018 q3": "$11928343.76"
                },
                "ebitda": {
                    "2016 q1": "$720442.78",
                    "2016 q2": "$846316.20",
                    "2016 q3": "$952137.73",
                    "2016 q4": "$640391.82",
                    "2017 q1": "$662095.06",
                    "2017 q2": "$215438.21",
                    "2017 q3": "$1660878.70",
                    "2017 q4": "$1175066.48",
                    "2018 q1": "$609879.59",
                    "2018 q2": "$537621.58",
                    "2018 q3": "$342618.66"
                }
            },
            {
                "id": 17,
                "company_name": "Photobug",
                "status": "Approved",
                "info": "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
                "performance": "Excellent",
                "key_contacts": {
                    "first_contact": "Urbain",
                    "second_contact": "Cammie"
                },
                "website": "https://shareasale.com",
                "address": {
                    "street": "0 Russell Road",
                    "city": "Saint Paul",
                    "state": "Minnesota",
                    "zip": "55108"
                },
                "company_phone": "612-855-3473",
                "revenue": {
                    "2016 q1": "$84193931.55",
                    "2016 q2": "$6229367.63",
                    "2016 q3": "$55199949.19",
                    "2016 q4": "$11141622.73",
                    "2017 q1": "$93554377.25",
                    "2017 q2": "$37843794.09",
                    "2017 q3": "$64871816.50",
                    "2017 q4": "$15424358.24",
                    "2018 q1": "$60139270.21",
                    "2018 q2": "$17624383.17",
                    "2018 q3": "$46359179.04"
                },
                "ebitda": {
                    "2016 q1": "$1183072.11",
                    "2016 q2": "$527751.42",
                    "2016 q3": "$1002651.72",
                    "2016 q4": "$542540.34",
                    "2017 q1": "$953808.21",
                    "2017 q2": "$1025447.47",
                    "2017 q3": "$1520146.27",
                    "2017 q4": "$738133.83",
                    "2018 q1": "$1184859.59",
                    "2018 q2": "$1349082.05",
                    "2018 q3": "$886091.79"
                }
            },
            {
                "id": 18,
                "company_name": "Blogspan",
                "status": "Researching",
                "info": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
                "performance": "Excellent",
                "key_contacts": {
                    "first_contact": "Rem",
                    "second_contact": "Amalea"
                },
                "website": "https://cpanel.net",
                "address": {
                    "street": "60807 Vermont Place",
                    "city": "Phoenix",
                    "state": "Arizona",
                    "zip": "85062"
                },
                "company_phone": "602-178-4402",
                "revenue": {
                    "2016 q1": "$48554611.26",
                    "2016 q2": "$50977184.55",
                    "2016 q3": "$23367172.31",
                    "2016 q4": "$30988631.01",
                    "2017 q1": "$95297872.89",
                    "2017 q2": "$66505364.10",
                    "2017 q3": "$60022647.06",
                    "2017 q4": "$97586813.54",
                    "2018 q1": "$38492783.17",
                    "2018 q2": "$39506393.81",
                    "2018 q3": "$40799228.09"
                },
                "ebitda": {
                    "2016 q1": "$1701927.02",
                    "2016 q2": "$425112.51",
                    "2016 q3": "$1229785.90",
                    "2016 q4": "$1869583.45",
                    "2017 q1": "$976356.60",
                    "2017 q2": "$184828.74",
                    "2017 q3": "$733428.19",
                    "2017 q4": "$1482617.17",
                    "2018 q1": "$263499.40",
                    "2018 q2": "$186711.81",
                    "2018 q3": "$1435072.76"
                }
            },
            {
                "id": 19,
                "company_name": "Shuffletag",
                "status": "Researching",
                "info": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
                "performance": "Good",
                "key_contacts": {
                    "first_contact": "Regan",
                    "second_contact": "Anne"
                },
                "website": "http://amazon.com",
                "address": {
                    "street": "09814 Fairfield Drive",
                    "city": "Denver",
                    "state": "Colorado",
                    "zip": "80291"
                },
                "company_phone": "303-591-4196",
                "revenue": {
                    "2016 q1": "$39481723.13",
                    "2016 q2": "$35156013.13",
                    "2016 q3": "$37347572.43",
                    "2016 q4": "$98397662.35",
                    "2017 q1": "$49685480.46",
                    "2017 q2": "$33647026.91",
                    "2017 q3": "$94046191.96",
                    "2017 q4": "$66193906.31",
                    "2018 q1": "$73196469.90",
                    "2018 q2": "$68048153.86",
                    "2018 q3": "$83343004.37"
                },
                "ebitda": {
                    "2016 q1": "$1702224.49",
                    "2016 q2": "$1071781.22",
                    "2016 q3": "$1801469.14",
                    "2016 q4": "$1364200.60",
                    "2017 q1": "$1826575.98",
                    "2017 q2": "$1126245.55",
                    "2017 q3": "$1680921.76",
                    "2017 q4": "$408517.42",
                    "2018 q1": "$1646250.62",
                    "2018 q2": "$799818.20",
                    "2018 q3": "$1920933.29"
                }
            },
            {
                "id": 20,
                "company_name": "Topicshots",
                "status": "Researching",
                "info": "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
                "performance": "Excellent",
                "key_contacts": {
                    "first_contact": "Pebrook",
                    "second_contact": "Noell"
                },
                "website": "http://alexa.com",
                "address": {
                    "street": "3 Sutherland Crossing",
                    "city": "Rochester",
                    "state": "Minnesota",
                    "zip": "55905"
                },
                "company_phone": "507-607-5740",
                "revenue": {
                    "2016 q1": "$58501390.88",
                    "2016 q2": "$25501963.95",
                    "2016 q3": "$17439431.27",
                    "2016 q4": "$49665931.54",
                    "2017 q1": "$71906691.44",
                    "2017 q2": "$27793589.12",
                    "2017 q3": "$16802540.87",
                    "2017 q4": "$55763299.68",
                    "2018 q1": "$47420655.88",
                    "2018 q2": "$82446703.09",
                    "2018 q3": "$94563334.68"
                },
                "ebitda": {
                    "2016 q1": "$821428.12",
                    "2016 q2": "$1278846.50",
                    "2016 q3": "$503659.14",
                    "2016 q4": "$1866653.98",
                    "2017 q1": "$298801.77",
                    "2017 q2": "$858116.82",
                    "2017 q3": "$224744.90",
                    "2017 q4": "$597649.60",
                    "2018 q1": "$1164554.89",
                    "2018 q2": "$1138105.50",
                    "2018 q3": "$140281.70"
                }
            }
        ];

        return { companyData };
    }
}
