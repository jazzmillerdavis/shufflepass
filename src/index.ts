export default function ShufflePass(): { password: string, colour: string, colourCode: string, animal: string, number: number, symbol: string } {

    const colours = [
        {
            "name": "Abbey",
            "value": "#4C4F56"
        },
        {
            "name": "Acadia",
            "value": "#1B1404"
        },
        {
            "name": "Acapulco",
            "value": "#7CB0A1"
        },
        {
            "name": "Aero",
            "value": "#7CB9E8"
        },
        {
            "name": "Affair",
            "value": "#714693"
        },
        {
            "name": "Akaroa",
            "value": "#D4C4A8"
        },
        {
            "name": "Alabaster",
            "value": "#F2F0E6"
        },
        {
            "name": "Algae",
            "value": "#93DFB8"
        },
        {
            "name": "Alloy",
            "value": "#C46210"
        },
        {
            "name": "Allports",
            "value": "#0076A3"
        },
        {
            "name": "Almond",
            "value": "#EFDECD"
        },
        {
            "name": "Alpine",
            "value": "#AF8F2C"
        },
        {
            "name": "Alto",
            "value": "#DBDBDB"
        },
        {
            "name": "Aluminium",
            "value": "#A9ACB6"
        },
        {
            "name": "Amaranth",
            "value": "#E52B50"
        },
        {
            "name": "Amazonite",
            "value": "#00C4B0"
        },
        {
            "name": "Amber",
            "value": "#FFBF00"
        },
        {
            "name": "Amethyst",
            "value": "#9966CC"
        },
        {
            "name": "Apricot",
            "value": "#FBCEB1"
        },
        {
            "name": "Aqua",
            "value": "#00FFFF"
        },
        {
            "name": "Aquamarine",
            "value": "#7FFFD4"
        },
        {
            "name": "Arapawa",
            "value": "#110C6C"
        },
        {
            "name": "Armadillo",
            "value": "#433E37"
        },
        {
            "name": "Arrowtown",
            "value": "#948771"
        },
        {
            "name": "Arsenic",
            "value": "#3B444B"
        },
        {
            "name": "Artichoke",
            "value": "#8F9779"
        },
        {
            "name": "Ash",
            "value": "#C6C3B5"
        },
        {
            "name": "Asparagus",
            "value": "#87A96B"
        },
        {
            "name": "Asphalt",
            "value": "#130A06"
        },
        {
            "name": "Astra",
            "value": "#FAEAB9"
        },
        {
            "name": "Astral",
            "value": "#327DA0"
        },
        {
            "name": "Astronaut",
            "value": "#283A77"
        },
        {
            "name": "Atlantis",
            "value": "#97CD2D"
        },
        {
            "name": "Atoll",
            "value": "#0A6F75"
        },
        {
            "name": "Aubergine",
            "value": "#3B0910"
        },
        {
            "name": "Auburn",
            "value": "#A52A2A"
        },
        {
            "name": "Aureolin",
            "value": "#FDEE00"
        },
        {
            "name": "Avocado",
            "value": "#568203"
        },
        {
            "name": "Awesome",
            "value": "#FF2052"
        },
        {
            "name": "Axolotl",
            "value": "#4E6649"
        },
        {
            "name": "Azalea",
            "value": "#F7C8DA"
        },
        {
            "name": "Aztec",
            "value": "#0D1C19"
        },
        {
            "name": "Azure",
            "value": "#007FFF"
        },
        {
            "name": "Bahama",
            "value": "#026395"
        },
        {
            "name": "Bahia",
            "value": "#A5CB0C"
        },
        {
            "name": "Baja",
            "value": "#FFF8D1"
        },
        {
            "name": "Baltic",
            "value": "#2A2630"
        },
        {
            "name": "Bamboo",
            "value": "#DA6304"
        },
        {
            "name": "Banana",
            "value": "#FAE7B5"
        },
        {
            "name": "Bandicoot",
            "value": "#858470"
        },
        {
            "name": "Barberry",
            "value": "#DED717"
        },
        {
            "name": "Barbie",
            "value": "#E0218A"
        },
        {
            "name": "Barn",
            "value": "#7C0A02"
        },
        {
            "name": "Barossa",
            "value": "#44012D"
        },
        {
            "name": "Bastille",
            "value": "#292130"
        },
        {
            "name": "Bayleaf",
            "value": "#7DA98D"
        },
        {
            "name": "Bazaar",
            "value": "#98777B"
        },
        {
            "name": "Beaver",
            "value": "#9F8170"
        },
        {
            "name": "Bedazzled",
            "value": "#2E5894"
        },
        {
            "name": "Beeswax",
            "value": "#FEF2C7"
        },
        {
            "name": "Begonia",
            "value": "#FA6E79"
        },
        {
            "name": "Beige",
            "value": "#F5F5DC"
        },
        {
            "name": "Belgion",
            "value": "#ADD8FF"
        },
        {
            "name": "Bermuda",
            "value": "#7DD8C6"
        },
        {
            "name": "Bianca",
            "value": "#FCFBF3"
        },
        {
            "name": "Bilbao",
            "value": "#327C14"
        },
        {
            "name": "Birch",
            "value": "#373021"
        },
        {
            "name": "Biscay",
            "value": "#1B3162"
        },
        {
            "name": "Bismark",
            "value": "#497183"
        },
        {
            "name": "Bisque",
            "value": "#FFE4C4"
        },
        {
            "name": "Bistre",
            "value": "#3D2B1F"
        },
        {
            "name": "Bitter",
            "value": "#868974"
        },
        {
            "name": "Bittersweet",
            "value": "#FE6F5E"
        },
        {
            "name": "Bizarre",
            "value": "#EEDEDA"
        },
        {
            "name": "Black",
            "value": "#000000"
        },
        {
            "name": "Blackbean",
            "value": "#3D0C02"
        },
        {
            "name": "Blackberry",
            "value": "#4D0135"
        },
        {
            "name": "Blackcurrant",
            "value": "#32293A"
        },
        {
            "name": "Blanched",
            "value": "#FFEBCD"
        },
        {
            "name": "Blaze",
            "value": "#FF6700"
        },
        {
            "name": "Bleach",
            "value": "#FEF3D8"
        },
        {
            "name": "Bleached",
            "value": "#2C2133"
        },
        {
            "name": "Blizzard",
            "value": "#A3E3ED"
        },
        {
            "name": "Blond",
            "value": "#FAF0BE"
        },
        {
            "name": "Blossom",
            "value": "#DCB4BC"
        },
        {
            "name": "Blue",
            "value": "#0000FF"
        },
        {
            "name": "Bluebell",
            "value": "#A2A2D0"
        },
        {
            "name": "Blueberry",
            "value": "#4F86F7"
        },
        {
            "name": "Bluebonnet",
            "value": "#1C1CF0"
        },
        {
            "name": "Blumine",
            "value": "#18587A"
        },
        {
            "name": "Blush",
            "value": "#DE5D83"
        },
        {
            "name": "Bole",
            "value": "#79443B"
        },
        {
            "name": "Bombay",
            "value": "#AFB1B8"
        },
        {
            "name": "Bondi",
            "value": "#0095B6"
        },
        {
            "name": "Bone",
            "value": "#E3DAC9"
        },
        {
            "name": "Bordeaux",
            "value": "#5C0120"
        },
        {
            "name": "Bossanova",
            "value": "#4E2A5A"
        },
        {
            "name": "Botticelli",
            "value": "#C7DDE5"
        },
        {
            "name": "Bottle",
            "value": "#006A4E"
        },
        {
            "name": "Boulder",
            "value": "#7A7A7A"
        },
        {
            "name": "Bouquet",
            "value": "#AE809E"
        },
        {
            "name": "Bourbon",
            "value": "#BA6F1E"
        },
        {
            "name": "Boysenberry",
            "value": "#873260"
        },
        {
            "name": "Bracken",
            "value": "#4A2A04"
        },
        {
            "name": "Brandy",
            "value": "#DEC196"
        },
        {
            "name": "Brass",
            "value": "#B5A642"
        },
        {
            "name": "Brick",
            "value": "#CB4154"
        },
        {
            "name": "Bridesmaid",
            "value": "#FEF0EC"
        },
        {
            "name": "Bronco",
            "value": "#ABA196"
        },
        {
            "name": "Bronze",
            "value": "#CD7F32"
        },
        {
            "name": "Bronzetone",
            "value": "#4D400F"
        },
        {
            "name": "Broom",
            "value": "#FFEC13"
        },
        {
            "name": "Brown",
            "value": "#964B00"
        },
        {
            "name": "Brunswick",
            "value": "#1B4D3E"
        },
        {
            "name": "Bubblegum",
            "value": "#FFC1CC"
        },
        {
            "name": "Bubbles",
            "value": "#E7FEFF"
        },
        {
            "name": "Buccaneer",
            "value": "#622F30"
        },
        {
            "name": "Bud",
            "value": "#A8AE9C"
        },
        {
            "name": "Buff",
            "value": "#F0DC82"
        },
        {
            "name": "Bunker",
            "value": "#0D1117"
        },
        {
            "name": "Bunting",
            "value": "#151F4C"
        },
        {
            "name": "Burgundy",
            "value": "#800020"
        },
        {
            "name": "Burlywood",
            "value": "#DEB887"
        },
        {
            "name": "Burnham",
            "value": "#002E20"
        },
        {
            "name": "Burning",
            "value": "#FF7034"
        },
        {
            "name": "Bush",
            "value": "#0D2E1C"
        },
        {
            "name": "Buttercup",
            "value": "#F3AD16"
        },
        {
            "name": "Buttermilk",
            "value": "#FFF1B5"
        },
        {
            "name": "Buttery",
            "value": "#FFFCEA"
        },
        {
            "name": "Byzantine",
            "value": "#BD33A4"
        },
        {
            "name": "Byzantium",
            "value": "#702963"
        },
        {
            "name": "Cabaret",
            "value": "#D94972"
        },
        {
            "name": "Cactus",
            "value": "#587156"
        },
        {
            "name": "Cadet",
            "value": "#536872"
        },
        {
            "name": "Cadillac",
            "value": "#B04C6A"
        },
        {
            "name": "Cadmium",
            "value": "#ED872D"
        },
        {
            "name": "Calico",
            "value": "#E0C095"
        },
        {
            "name": "California",
            "value": "#FE9D04"
        },
        {
            "name": "Calypso",
            "value": "#31728D"
        },
        {
            "name": "Camarone",
            "value": "#00581A"
        },
        {
            "name": "Cambridge",
            "value": "#A3C1AD"
        },
        {
            "name": "Camel",
            "value": "#C19A6B"
        },
        {
            "name": "Camelot",
            "value": "#893456"
        },
        {
            "name": "Cameo",
            "value": "#D9B99B"
        },
        {
            "name": "Camouflage",
            "value": "#3C3910"
        },
        {
            "name": "Canary",
            "value": "#FFFF99"
        },
        {
            "name": "Candlelight",
            "value": "#FCD917"
        },
        {
            "name": "Candyapple",
            "value": "#FF0800"
        },
        {
            "name": "Caper",
            "value": "#DCEDB4"
        },
        {
            "name": "Capri",
            "value": "#00BFFF"
        },
        {
            "name": "Caramel",
            "value": "#FFDDAF"
        },
        {
            "name": "Cararra",
            "value": "#EEEEE8"
        },
        {
            "name": "Cardinal",
            "value": "#C41E3A"
        },
        {
            "name": "Caribbean",
            "value": "#00CC99"
        },
        {
            "name": "Carissma",
            "value": "#EA88A8"
        },
        {
            "name": "Carla",
            "value": "#F3FFD8"
        },
        {
            "name": "Carmine",
            "value": "#960018"
        },
        {
            "name": "Carnation",
            "value": "#F95A61"
        },
        {
            "name": "Carnelian",
            "value": "#B31B1B"
        },
        {
            "name": "Carrot",
            "value": "#ED9121"
        },
        {
            "name": "Casablanca",
            "value": "#F8B853"
        },
        {
            "name": "Casal",
            "value": "#2F6168"
        },
        {
            "name": "Cascade",
            "value": "#8BA9A5"
        },
        {
            "name": "Cashmere",
            "value": "#E6BEA5"
        },
        {
            "name": "Casper",
            "value": "#ADBED1"
        },
        {
            "name": "Castleton",
            "value": "#00563B"
        },
        {
            "name": "Castro",
            "value": "#52001F"
        },
        {
            "name": "Catalina",
            "value": "#062A78"
        },
        {
            "name": "Catawba",
            "value": "#703642"
        },
        {
            "name": "Cedar",
            "value": "#3E1C14"
        },
        {
            "name": "Ceil",
            "value": "#92A1CF"
        },
        {
            "name": "Celadon",
            "value": "#ACE1AF"
        },
        {
            "name": "Celery",
            "value": "#B8C25D"
        },
        {
            "name": "Celeste",
            "value": "#B2FFFF"
        },
        {
            "name": "Celestial",
            "value": "#4997D0"
        },
        {
            "name": "Cello",
            "value": "#1E385B"
        },
        {
            "name": "Celtic",
            "value": "#163222"
        },
        {
            "name": "Cement",
            "value": "#8D7662"
        },
        {
            "name": "Cerise",
            "value": "#DE3163"
        },
        {
            "name": "Cerulean",
            "value": "#007BA7"
        },
        {
            "name": "Chalky",
            "value": "#EED794"
        },
        {
            "name": "Chambray",
            "value": "#354E8C"
        },
        {
            "name": "Chamois",
            "value": "#EDDCB1"
        },
        {
            "name": "Chamoisee",
            "value": "#A0785A"
        },
        {
            "name": "Champagne",
            "value": "#F7E7CE"
        },
        {
            "name": "Chantilly",
            "value": "#F8C3DF"
        },
        {
            "name": "Charade",
            "value": "#292937"
        },
        {
            "name": "Charcoal",
            "value": "#36454F"
        },
        {
            "name": "Chardon",
            "value": "#FFF3F1"
        },
        {
            "name": "Chardonnay",
            "value": "#FFCD8C"
        },
        {
            "name": "Charlotte",
            "value": "#BAEEF9"
        },
        {
            "name": "Charm",
            "value": "#D47494"
        },
        {
            "name": "Chartreuse",
            "value": "#DFFF00"
        },
        {
            "name": "Chatelle",
            "value": "#BDB3C7"
        },
        {
            "name": "Chenin",
            "value": "#DFCD6F"
        },
        {
            "name": "Cherokee",
            "value": "#FCDA98"
        },
        {
            "name": "Cherry",
            "value": "#DE3163"
        },
        {
            "name": "Cherryblossom",
            "value": "#FFB7C5"
        },
        {
            "name": "Cherrywood",
            "value": "#651A14"
        },
        {
            "name": "Cherub",
            "value": "#F8D9E9"
        },
        {
            "name": "Chestnut",
            "value": "#954535"
        },
        {
            "name": "Chicago",
            "value": "#5D5C58"
        },
        {
            "name": "Chiffon",
            "value": "#F1FFC8"
        },
        {
            "name": "Chino",
            "value": "#CEC7A7"
        },
        {
            "name": "Chinook",
            "value": "#A8E3BD"
        },
        {
            "name": "Chlorophyll",
            "value": "#4AFF00"
        },
        {
            "name": "Chocolate",
            "value": "#7B3F00"
        },
        {
            "name": "Christalle",
            "value": "#33036B"
        },
        {
            "name": "Christi",
            "value": "#67A712"
        },
        {
            "name": "Christine",
            "value": "#E7730A"
        },
        {
            "name": "Cinder",
            "value": "#0E0E18"
        },
        {
            "name": "Cinderella",
            "value": "#FDE1DC"
        },
        {
            "name": "Cinereous",
            "value": "#98817B"
        },
        {
            "name": "Cinnabar",
            "value": "#E34234"
        },
        {
            "name": "Cinnamon",
            "value": "#D2691E"
        },
        {
            "name": "Cioccolato",
            "value": "#55280C"
        },
        {
            "name": "Citrine",
            "value": "#E4D00A"
        },
        {
            "name": "Citron",
            "value": "#9FA91F"
        },
        {
            "name": "Citrus",
            "value": "#A1C50A"
        },
        {
            "name": "Clairvoyant",
            "value": "#480656"
        },
        {
            "name": "Clamshell",
            "value": "#D4B6AF"
        },
        {
            "name": "Claret",
            "value": "#7F1734"
        },
        {
            "name": "Clay",
            "value": "#8A8360"
        },
        {
            "name": "Clementine",
            "value": "#E96E00"
        },
        {
            "name": "Clinker",
            "value": "#371D09"
        },
        {
            "name": "Cloud",
            "value": "#C7C4BF"
        },
        {
            "name": "Cloudburst",
            "value": "#202E54"
        },
        {
            "name": "Cloudy",
            "value": "#ACA59F"
        },
        {
            "name": "Clover",
            "value": "#384910"
        },
        {
            "name": "Cobalt",
            "value": "#0047AB"
        },
        {
            "name": "Cocoa",
            "value": "#D2691E"
        },
        {
            "name": "Coconut",
            "value": "#965A3E"
        },
        {
            "name": "Coffee",
            "value": "#6F4E37"
        },
        {
            "name": "Cognac",
            "value": "#9F381D"
        },
        {
            "name": "Cola",
            "value": "#3F2500"
        },
        {
            "name": "Colonial",
            "value": "#FFEDBC"
        },
        {
            "name": "Comet",
            "value": "#5C5D75"
        },
        {
            "name": "Como",
            "value": "#517C66"
        },
        {
            "name": "Conch",
            "value": "#C9D9D2"
        },
        {
            "name": "Concord",
            "value": "#7C7B7A"
        },
        {
            "name": "Concrete",
            "value": "#F2F2F2"
        },
        {
            "name": "Confetti",
            "value": "#E9D75A"
        },
        {
            "name": "Conifer",
            "value": "#ACDD4D"
        },
        {
            "name": "Contessa",
            "value": "#C6726B"
        },
        {
            "name": "Cool",
            "value": "#8C92AC"
        },
        {
            "name": "Copper",
            "value": "#B87333"
        },
        {
            "name": "Coquelicot",
            "value": "#FF3800"
        },
        {
            "name": "Coral",
            "value": "#FF7F50"
        },
        {
            "name": "Cordovan",
            "value": "#893F45"
        },
        {
            "name": "Corduroy",
            "value": "#606E68"
        },
        {
            "name": "Coriander",
            "value": "#C4D0B0"
        },
        {
            "name": "Cork",
            "value": "#40291D"
        },
        {
            "name": "Corn",
            "value": "#FBEC5D"
        },
        {
            "name": "Cornsilk",
            "value": "#FFF8DC"
        },
        {
            "name": "Corvette",
            "value": "#FAD3A2"
        },
        {
            "name": "Cosmic",
            "value": "#76395D"
        },
        {
            "name": "Cosmos",
            "value": "#FFD8D9"
        },
        {
            "name": "Cowboy",
            "value": "#4D282D"
        },
        {
            "name": "Crail",
            "value": "#B95140"
        },
        {
            "name": "Cranberry",
            "value": "#DB5079"
        },
        {
            "name": "Cream",
            "value": "#FFFDD0"
        },
        {
            "name": "Creole",
            "value": "#1E0F04"
        },
        {
            "name": "Crete",
            "value": "#737829"
        },
        {
            "name": "Crimson",
            "value": "#DC143C"
        },
        {
            "name": "Crocodile",
            "value": "#736D58"
        },
        {
            "name": "Crowshead",
            "value": "#1C1208"
        },
        {
            "name": "Cruise",
            "value": "#B5ECDF"
        },
        {
            "name": "Crusoe",
            "value": "#004816"
        },
        {
            "name": "Crusta",
            "value": "#FD7B33"
        },
        {
            "name": "Cultured",
            "value": "#F5F5F5"
        },
        {
            "name": "Cumin",
            "value": "#924321"
        },
        {
            "name": "Cumulus",
            "value": "#FDFFD5"
        },
        {
            "name": "Cupid",
            "value": "#FBBEDA"
        },
        {
            "name": "Cyan",
            "value": "#00FFFF"
        },
        {
            "name": "Cyclamen",
            "value": "#F56FA1"
        },
        {
            "name": "Cyprus",
            "value": "#003E40"
        },
        {
            "name": "Daffodil",
            "value": "#FFFF31"
        },
        {
            "name": "Daintree",
            "value": "#012731"
        },
        {
            "name": "Dallas",
            "value": "#6E4B26"
        },
        {
            "name": "Dandelion",
            "value": "#F0E130"
        },
        {
            "name": "Danube",
            "value": "#6093D1"
        },
        {
            "name": "Dawn",
            "value": "#A6A29A"
        },
        {
            "name": "Deco",
            "value": "#D2DA97"
        },
        {
            "name": "Deer",
            "value": "#BA8759"
        },
        {
            "name": "Dell",
            "value": "#396413"
        },
        {
            "name": "Delta",
            "value": "#A4A49D"
        },
        {
            "name": "Deluge",
            "value": "#7563A8"
        },
        {
            "name": "Denim",
            "value": "#1560BD"
        },
        {
            "name": "Derby",
            "value": "#FFEED8"
        },
        {
            "name": "Desert",
            "value": "#C19A6B"
        },
        {
            "name": "Desire",
            "value": "#EA3C53"
        },
        {
            "name": "Dew",
            "value": "#EAFFFE"
        },
        {
            "name": "Diamond",
            "value": "#B9F2FF"
        },
        {
            "name": "Diesel",
            "value": "#130000"
        },
        {
            "name": "Dingley",
            "value": "#5D7747"
        },
        {
            "name": "Dirt",
            "value": "#9B7653"
        },
        {
            "name": "Disco",
            "value": "#871550"
        },
        {
            "name": "Dixie",
            "value": "#E29418"
        },
        {
            "name": "Dogs",
            "value": "#B86D29"
        },
        {
            "name": "Dolly",
            "value": "#F9FF8B"
        },
        {
            "name": "Dolphin",
            "value": "#646077"
        },
        {
            "name": "Domino",
            "value": "#8E775E"
        },
        {
            "name": "Dorado",
            "value": "#6B5755"
        },
        {
            "name": "Dove",
            "value": "#6D6C6C"
        },
        {
            "name": "Downriver",
            "value": "#092256"
        },
        {
            "name": "Downy",
            "value": "#6FD0C5"
        },
        {
            "name": "Drab",
            "value": "#967117"
        },
        {
            "name": "Driftwood",
            "value": "#AF8751"
        },
        {
            "name": "Drover",
            "value": "#FDF7AD"
        },
        {
            "name": "Dune",
            "value": "#383533"
        },
        {
            "name": "Dusty",
            "value": "#A8989B"
        },
        {
            "name": "Eagle",
            "value": "#B6BAA4"
        },
        {
            "name": "Eastside",
            "value": "#AC91CE"
        },
        {
            "name": "Ebb",
            "value": "#E9E3E3"
        },
        {
            "name": "Ebony",
            "value": "#555D50"
        },
        {
            "name": "Eclipse",
            "value": "#311C17"
        },
        {
            "name": "Ecru",
            "value": "#C2B280"
        },
        {
            "name": "Ecstasy",
            "value": "#FA7814"
        },
        {
            "name": "Eden",
            "value": "#105852"
        },
        {
            "name": "Edgewater",
            "value": "#C8E3D7"
        },
        {
            "name": "Edward",
            "value": "#A2AEAB"
        },
        {
            "name": "Eerie",
            "value": "#1B1B1B"
        },
        {
            "name": "Egg",
            "value": "#FFF4DD"
        },
        {
            "name": "Eggplant",
            "value": "#614051"
        },
        {
            "name": "Eggshell",
            "value": "#F0EAD6"
        },
        {
            "name": "Egyptian",
            "value": "#1034A6"
        },
        {
            "name": "Electric",
            "value": "#7DF9FF"
        },
        {
            "name": "Elephant",
            "value": "#123447"
        },
        {
            "name": "Elm",
            "value": "#1C7C7D"
        },
        {
            "name": "Emerald",
            "value": "#50C878"
        },
        {
            "name": "Eminence",
            "value": "#6C3082"
        },
        {
            "name": "Emperor",
            "value": "#514649"
        },
        {
            "name": "Empress",
            "value": "#817377"
        },
        {
            "name": "Endeavour",
            "value": "#0056A7"
        },
        {
            "name": "Energetic",
            "value": "#F8DD5C"
        },
        {
            "name": "Envy",
            "value": "#8BA690"
        },
        {
            "name": "Equator",
            "value": "#E1BC64"
        },
        {
            "name": "Espresso",
            "value": "#612718"
        },
        {
            "name": "Eternity",
            "value": "#211A0E"
        },
        {
            "name": "Eucalyptus",
            "value": "#44D7A8"
        },
        {
            "name": "Eunry",
            "value": "#CFA39D"
        },
        {
            "name": "Evening",
            "value": "#024E46"
        },
        {
            "name": "Everglade",
            "value": "#1C402E"
        },
        {
            "name": "Falcon",
            "value": "#7F626D"
        },
        {
            "name": "Fallow",
            "value": "#C19A6B"
        },
        {
            "name": "Fandango",
            "value": "#B53389"
        },
        {
            "name": "Fantasy",
            "value": "#FAF3F0"
        },
        {
            "name": "Fawn",
            "value": "#E5AA70"
        },
        {
            "name": "Fedora",
            "value": "#796A78"
        },
        {
            "name": "Feijoa",
            "value": "#9FDD8C"
        },
        {
            "name": "Feldgrau",
            "value": "#4D5D53"
        },
        {
            "name": "Feldspar",
            "value": "#FDD5B1"
        },
        {
            "name": "Fern",
            "value": "#63B76C"
        },
        {
            "name": "Ferra",
            "value": "#704F50"
        },
        {
            "name": "Festival",
            "value": "#FBE96C"
        },
        {
            "name": "Feta",
            "value": "#F0FCEA"
        },
        {
            "name": "Fiery",
            "value": "#FF5470"
        },
        {
            "name": "Finch",
            "value": "#626649"
        },
        {
            "name": "Finlandia",
            "value": "#556D56"
        },
        {
            "name": "Finn",
            "value": "#692D54"
        },
        {
            "name": "Fiord",
            "value": "#405169"
        },
        {
            "name": "Fire",
            "value": "#AA4203"
        },
        {
            "name": "Firebrick",
            "value": "#B22222"
        },
        {
            "name": "Firefly",
            "value": "#0E2A30"
        },
        {
            "name": "Flame",
            "value": "#E25822"
        },
        {
            "name": "Flamenco",
            "value": "#FF7D07"
        },
        {
            "name": "Flamingo",
            "value": "#F2552A"
        },
        {
            "name": "Flattery",
            "value": "#6B4423"
        },
        {
            "name": "Flavescent",
            "value": "#F7E98E"
        },
        {
            "name": "Flax",
            "value": "#EEDC82"
        },
        {
            "name": "Flint",
            "value": "#6F6A61"
        },
        {
            "name": "Flirt",
            "value": "#A2006D"
        },
        {
            "name": "Foam",
            "value": "#D8FCFA"
        },
        {
            "name": "Fog",
            "value": "#D7D0FF"
        },
        {
            "name": "Folly",
            "value": "#FF004F"
        },
        {
            "name": "Frangipani",
            "value": "#FFDEB3"
        },
        {
            "name": "Fresh",
            "value": "#A6E7FF"
        },
        {
            "name": "Frogert",
            "value": "#E936A7"
        },
        {
            "name": "Froly",
            "value": "#F57584"
        },
        {
            "name": "Frost",
            "value": "#EDF5DD"
        },
        {
            "name": "Frostbite",
            "value": "#E936A7"
        },
        {
            "name": "Frostee",
            "value": "#E4F6E7"
        },
        {
            "name": "Fuchsia",
            "value": "#FF00FF"
        },
        {
            "name": "Fuego",
            "value": "#BEDE0D"
        },
        {
            "name": "Fulvous",
            "value": "#E48400"
        },
        {
            "name": "Fuzzywuzzy",
            "value": "#CC6666"
        },
        {
            "name": "Gainsboro",
            "value": "#DCDCDC"
        },
        {
            "name": "Gallery",
            "value": "#EFEFEF"
        },
        {
            "name": "Galliano",
            "value": "#DCB20C"
        },
        {
            "name": "Gamboge",
            "value": "#E49B0F"
        },
        {
            "name": "Geebung",
            "value": "#D18F1B"
        },
        {
            "name": "Genoa",
            "value": "#15736B"
        },
        {
            "name": "Geraldine",
            "value": "#FB8989"
        },
        {
            "name": "Geyser",
            "value": "#D4DFE2"
        },
        {
            "name": "Ghost",
            "value": "#C7C9D5"
        },
        {
            "name": "Gigas",
            "value": "#523C94"
        },
        {
            "name": "Gimblet",
            "value": "#B8B56A"
        },
        {
            "name": "Gin",
            "value": "#E8F2EB"
        },
        {
            "name": "Ginger",
            "value": "#B06500"
        },
        {
            "name": "Givry",
            "value": "#F8E4BF"
        },
        {
            "name": "Glacier",
            "value": "#80B3C4"
        },
        {
            "name": "Glaucous",
            "value": "#6082B6"
        },
        {
            "name": "Glitter",
            "value": "#E6E8FA"
        },
        {
            "name": "Goblin",
            "value": "#3D7D52"
        },
        {
            "name": "Golden",
            "value": "#FFD700"
        },
        {
            "name": "Goldenrod",
            "value": "#DAA520"
        },
        {
            "name": "Gondola",
            "value": "#261414"
        },
        {
            "name": "Gorse",
            "value": "#FFF14F"
        },
        {
            "name": "Gossamer",
            "value": "#069B81"
        },
        {
            "name": "Gossip",
            "value": "#D2F8B0"
        },
        {
            "name": "Gothic",
            "value": "#6D92A1"
        },
        {
            "name": "Grandis",
            "value": "#FFD38C"
        },
        {
            "name": "Granite",
            "value": "#676767"
        },
        {
            "name": "Grannysmith",
            "value": "#84A0A0"
        },
        {
            "name": "Grape",
            "value": "#6F2DA8"
        },
        {
            "name": "Graphite",
            "value": "#251607"
        },
        {
            "name": "Gravel",
            "value": "#4A444B"
        },
        {
            "name": "Gray",
            "value": "#808080"
        },
        {
            "name": "Green",
            "value": "#00FF00"
        },
        {
            "name": "Grenadier",
            "value": "#D54600"
        },
        {
            "name": "Grizzly",
            "value": "#885818"
        },
        {
            "name": "Grullo",
            "value": "#A99A86"
        },
        {
            "name": "Gumbo",
            "value": "#7CA1A6"
        },
        {
            "name": "Gunmetal",
            "value": "#2a3439"
        },
        {
            "name": "Gunsmoke",
            "value": "#828685"
        },
        {
            "name": "Gurkha",
            "value": "#9A9577"
        },
        {
            "name": "Hacienda",
            "value": "#98811B"
        },
        {
            "name": "Haiti",
            "value": "#1B1035"
        },
        {
            "name": "Hampton",
            "value": "#E5D8AF"
        },
        {
            "name": "Harlequin",
            "value": "#3FFF00"
        },
        {
            "name": "Harp",
            "value": "#E6F2EA"
        },
        {
            "name": "Heath",
            "value": "#541012"
        },
        {
            "name": "Heather",
            "value": "#B7C3D0"
        },
        {
            "name": "Heliotrope",
            "value": "#DF73FF"
        },
        {
            "name": "Hemlock",
            "value": "#5E5D3B"
        },
        {
            "name": "Hemp",
            "value": "#907874"
        },
        {
            "name": "Hibiscus",
            "value": "#B6316C"
        },
        {
            "name": "Highland",
            "value": "#6F8E63"
        },
        {
            "name": "Hillary",
            "value": "#ACA586"
        },
        {
            "name": "Himalaya",
            "value": "#6A5D1B"
        },
        {
            "name": "Hoki",
            "value": "#65869F"
        },
        {
            "name": "Holly",
            "value": "#011D13"
        },
        {
            "name": "Honeydew",
            "value": "#F0FFF0"
        },
        {
            "name": "Honeysuckle",
            "value": "#EDFC84"
        },
        {
            "name": "Hopbush",
            "value": "#D06DA1"
        },
        {
            "name": "Horizon",
            "value": "#5A87A0"
        },
        {
            "name": "Horses",
            "value": "#543D37"
        },
        {
            "name": "Hurricane",
            "value": "#877C7B"
        },
        {
            "name": "Iceberg",
            "value": "#71A6D2"
        },
        {
            "name": "Icterine",
            "value": "#FCF75E"
        },
        {
            "name": "Imperial",
            "value": "#602F6B"
        },
        {
            "name": "Inchworm",
            "value": "#B2EC5D"
        },
        {
            "name": "Independence",
            "value": "#4C516D"
        },
        {
            "name": "Indigo",
            "value": "#4B0082"
        },
        {
            "name": "Iris",
            "value": "#5A4FCF"
        },
        {
            "name": "Irresistible",
            "value": "#B3446C"
        },
        {
            "name": "Isabelline",
            "value": "#F4F0EC"
        },
        {
            "name": "Ivory",
            "value": "#FFFFF0"
        },
        {
            "name": "Jade",
            "value": "#00A86B"
        },
        {
            "name": "Jasmine",
            "value": "#F8DE7E"
        },
        {
            "name": "Jasper",
            "value": "#D73B3E"
        },
        {
            "name": "Jet",
            "value": "#343434"
        },
        {
            "name": "Jonquil",
            "value": "#F4CA16"
        },
        {
            "name": "Keppel",
            "value": "#3AB09E"
        },
        {
            "name": "Kiwi",
            "value": "#8EE53F"
        },
        {
            "name": "Kobe",
            "value": "#882D17"
        },
        {
            "name": "Kobi",
            "value": "#E79FC4"
        },
        {
            "name": "Kobicha",
            "value": "#6B4423"
        },
        {
            "name": "Lava",
            "value": "#CF1020"
        },
        {
            "name": "Lemon",
            "value": "#FFF700"
        },
        {
            "name": "Liberty",
            "value": "#545AA7"
        },
        {
            "name": "Licorice",
            "value": "#1A1110"
        },
        {
            "name": "Lilac",
            "value": "#C8A2C8"
        },
        {
            "name": "Limerick",
            "value": "#9DC209"
        },
        {
            "name": "Linen",
            "value": "#FAF0E6"
        },
        {
            "name": "Liver",
            "value": "#674C47"
        },
        {
            "name": "Livid",
            "value": "#6699CC"
        },
        {
            "name": "Lumber",
            "value": "#FFE4CD"
        },
        {
            "name": "Lust",
            "value": "#E62020"
        },
        {
            "name": "Magenta",
            "value": "#FF00FF"
        },
        {
            "name": "Magnolia",
            "value": "#F8F4FF"
        },
        {
            "name": "Mahogany",
            "value": "#C04000"
        },
        {
            "name": "Maize",
            "value": "#FBEC5D"
        },
        {
            "name": "Malachite",
            "value": "#0BDA51"
        },
        {
            "name": "Manatee",
            "value": "#979AAA"
        },
        {
            "name": "Mandarin",
            "value": "#F37A48"
        },
        {
            "name": "Mantis",
            "value": "#74C365"
        },
        {
            "name": "Marigold",
            "value": "#EAA221"
        },
        {
            "name": "Mauve",
            "value": "#E0B0FF"
        },
        {
            "name": "Mauvelous",
            "value": "#EF98AA"
        },
        {
            "name": "Melon",
            "value": "#FDBCB4"
        },
        {
            "name": "Midnight",
            "value": "#702670"
        },
        {
            "name": "Milk",
            "value": "#FDFFF5"
        },
        {
            "name": "Mindaro",
            "value": "#E3F988"
        },
        {
            "name": "Ming",
            "value": "#36747D"
        },
        {
            "name": "Mint",
            "value": "#3EB489"
        },
        {
            "name": "Moccasin",
            "value": "#FAEBD7"
        },
        {
            "name": "Mulberry",
            "value": "#C54B8C"
        },
        {
            "name": "Mustard",
            "value": "#FFDB58"
        },
        {
            "name": "Mystic",
            "value": "#D65282"
        },
        {
            "name": "Navy",
            "value": "#000080"
        },
        {
            "name": "Nickel",
            "value": "#727472"
        },
        {
            "name": "Nyanza",
            "value": "#E9FFDB"
        },
        {
            "name": "Ochre",
            "value": "#CC7722"
        },
        {
            "name": "Olive",
            "value": "#808000"
        },
        {
            "name": "Olivine",
            "value": "#9AB973"
        },
        {
            "name": "Onyx",
            "value": "#353839"
        },
        {
            "name": "Orchid",
            "value": "#DA70D6"
        },
        {
            "name": "Patriarch",
            "value": "#800080"
        },
        {
            "name": "Peach",
            "value": "#FFCBA4"
        },
        {
            "name": "Pear",
            "value": "#D1E231"
        },
        {
            "name": "Pearl",
            "value": "#EAE0C8"
        },
        {
            "name": "Peridot",
            "value": "#E6E200"
        },
        {
            "name": "Periwinkle",
            "value": "#CCCCFF"
        },
        {
            "name": "Persimmon",
            "value": "#EC5800"
        },
        {
            "name": "Peru",
            "value": "#CD853F"
        },
        {
            "name": "Phlox",
            "value": "#DF00FF"
        },
        {
            "name": "Pineapple",
            "value": "#563C0D"
        },
        {
            "name": "Pink",
            "value": "#FFC0CB"
        },
        {
            "name": "Pistachio",
            "value": "#93C572"
        },
        {
            "name": "Platinum",
            "value": "#E5E4E2"
        },
        {
            "name": "Plum",
            "value": "#8E4585"
        },
        {
            "name": "Popstar",
            "value": "#BE4F62"
        },
        {
            "name": "Prune",
            "value": "#701C1C"
        },
        {
            "name": "Puce",
            "value": "#CC8899"
        },
        {
            "name": "Pumpkin",
            "value": "#FF7518"
        },
        {
            "name": "Purpureus",
            "value": "#9A4EAE"
        },
        {
            "name": "Quartz",
            "value": "#51484F"
        },
        {
            "name": "Rackley",
            "value": "#5D8AA8"
        },
        {
            "name": "Rajah",
            "value": "#FBAB60"
        },
        {
            "name": "Raspberry",
            "value": "#E30B5D"
        },
        {
            "name": "Razzmatazz",
            "value": "#E3256B"
        },
        {
            "name": "Red",
            "value": "#FF0000"
        },
        {
            "name": "Redwood",
            "value": "#A45A52"
        },
        {
            "name": "Regalia",
            "value": "#522D80"
        },
        {
            "name": "Rhythm",
            "value": "#777696"
        },
        {
            "name": "Rose",
            "value": "#FF007F"
        },
        {
            "name": "Rosewood",
            "value": "#65000B"
        },
        {
            "name": "Ruber",
            "value": "#CE4676"
        },
        {
            "name": "Ruby",
            "value": "#E0115F"
        },
        {
            "name": "Ruddy",
            "value": "#FF0028"
        },
        {
            "name": "Rufous",
            "value": "#A81C07"
        },
        {
            "name": "Russet",
            "value": "#80461B"
        },
        {
            "name": "Rust",
            "value": "#B7410E"
        },
        {
            "name": "Saffron",
            "value": "#F4C430"
        },
        {
            "name": "Sage",
            "value": "#BCB88A"
        },
        {
            "name": "Salmon",
            "value": "#FA8072"
        },
        {
            "name": "Sand",
            "value": "#C2B280"
        },
        {
            "name": "Sandstorm",
            "value": "#ECD540"
        },
        {
            "name": "Sangria",
            "value": "#92000A"
        },
        {
            "name": "Sapphire",
            "value": "#0F52BA"
        },
        {
            "name": "Scarlet",
            "value": "#FD0E35"
        },
        {
            "name": "Seashell",
            "value": "#FFF5EE"
        },
        {
            "name": "Sepia",
            "value": "#704214"
        },
        {
            "name": "Shadow",
            "value": "#8A795D"
        },
        {
            "name": "Shampoo",
            "value": "#FFCFF1"
        },
        {
            "name": "Sienna",
            "value": "#882D17"
        },
        {
            "name": "Silver",
            "value": "#C0C0C0"
        },
        {
            "name": "Sinopia",
            "value": "#CB410B"
        },
        {
            "name": "Skobeloff",
            "value": "#007474"
        },
        {
            "name": "Smitten",
            "value": "#C84186"
        },
        {
            "name": "Smoke",
            "value": "#738276"
        },
        {
            "name": "Snow",
            "value": "#FFFAFA"
        },
        {
            "name": "Soap",
            "value": "#CEC8EF"
        },
        {
            "name": "Stizza",
            "value": "#990000"
        },
        {
            "name": "Stormcloud",
            "value": "#4F666A"
        },
        {
            "name": "Straw",
            "value": "#E4D96F"
        },
        {
            "name": "Strawberry",
            "value": "#FC5A8D"
        },
        {
            "name": "Sunglow",
            "value": "#FFCC33"
        },
        {
            "name": "Sunny",
            "value": "#F2F27A"
        },
        {
            "name": "Sunray",
            "value": "#E3AB57"
        },
        {
            "name": "Sunset",
            "value": "#FAD6A5"
        },
        {
            "name": "Tan",
            "value": "#D2B48C"
        },
        {
            "name": "Tangelo",
            "value": "#F94D00"
        },
        {
            "name": "Tangerine",
            "value": "#F28500"
        },
        {
            "name": "Taupe",
            "value": "#483C32"
        },
        {
            "name": "Teal",
            "value": "#008080"
        },
        {
            "name": "Telemagenta",
            "value": "#CF3476"
        },
        {
            "name": "Thistle",
            "value": "#D8BFD8"
        },
        {
            "name": "Timberwolf",
            "value": "#DBD7D2"
        },
        {
            "name": "Tomato",
            "value": "#FF6347"
        },
        {
            "name": "Toolbox",
            "value": "#746CC0"
        },
        {
            "name": "Topaz",
            "value": "#FFC87C"
        },
        {
            "name": "Tulip",
            "value": "#FF878D"
        },
        {
            "name": "Tumbleweed",
            "value": "#DEAA88"
        },
        {
            "name": "Turquoise",
            "value": "#40E0D0"
        },
        {
            "name": "Tuscan",
            "value": "#FAD6A5"
        },
        {
            "name": "Tuscany",
            "value": "#C09999"
        },
        {
            "name": "Ube",
            "value": "#8878C3"
        },
        {
            "name": "Ultramarine",
            "value": "#3F00FF"
        },
        {
            "name": "Umber",
            "value": "#635147"
        },
        {
            "name": "Urobilin",
            "value": "#E1AD21"
        },
        {
            "name": "Vanilla",
            "value": "#F3E5AB"
        },
        {
            "name": "Verdigris",
            "value": "#43B3AE"
        },
        {
            "name": "Vermilion",
            "value": "#D9381E"
        },
        {
            "name": "Veronica",
            "value": "#A020F0"
        },
        {
            "name": "Violet",
            "value": "#8F00FF"
        },
        {
            "name": "Viridian",
            "value": "#40826D"
        },
        {
            "name": "Volt",
            "value": "#CEFF00"
        },
        {
            "name": "Waterspout",
            "value": "#A4F4F9"
        },
        {
            "name": "Wenge",
            "value": "#645452"
        },
        {
            "name": "Wheat",
            "value": "#F5DEB3"
        },
        {
            "name": "White",
            "value": "#FFFFFF"
        },
        {
            "name": "Wine",
            "value": "#722F37"
        },
        {
            "name": "Wisteria",
            "value": "#C9A0DC"
        },
        {
            "name": "Xanadu",
            "value": "#738678"
        },
        {
            "name": "Yellow",
            "value": "#FFFF00"
        },
        {
            "name": "Zaffre",
            "value": "#0014A8"
        },
        {
            "name": "Zomp",
            "value": "#39A78E"
        }
    ]
    const animals = [
        "Aardvark",
        "Aardwolf",
        "Adder",
        "Albatross",
        "Alligator",
        "Alpaca",
        "Anaconda",
        "Ant",
        "Anteater",
        "Antelope",
        "Ape",
        "Armadillo",
        "Axolotl",
        "Baboon",
        "Badger",
        "Bandicoot",
        "Barnacle",
        "Barracuda",
        "Bat",
        "Bear",
        "Beaver",
        "Bee",
        "Beetle",
        "Bilby",
        "Bison",
        "Blackbird",
        "Bluebird",
        "Boar",
        "Bobcat",
        "Bonobo",
        "Budgerigar",
        "Buffalo",
        "Bull",
        "Bullfrog",
        "Butterfly",
        "Buzzard",
        "Camel",
        "Canary",
        "Capybara",
        "Caribou",
        "Carp",
        "Cassowary",
        "Cat",
        "Caterpillar",
        "Catfish",
        "Cattle",
        "Centipede",
        "Chameleon",
        "Chamois",
        "Cheetah",
        "Chicken",
        "Chimpanzee",
        "Chinchilla",
        "Chipmunk",
        "Chough",
        "Cicada",
        "Clam",
        "Cobra",
        "Cockatoo",
        "Cockroach",
        "Cod",
        "Cormorant",
        "Cougar",
        "Cow",
        "Coyote",
        "Crab",
        "Crane",
        "Cricket",
        "Crocodile",
        "Crow",
        "Cuckoo",
        "Curlew",
        "Cuttlefish",
        "Deer",
        "Dingo",
        "Dinosaur",
        "Dog",
        "Dogfish",
        "Dolphin",
        "Donkey",
        "Dotterel",
        "Dove",
        "Dragonfly",
        "Duck",
        "Dugong",
        "Dunlin",
        "Eagle",
        "Echidna",
        "Eel",
        "Egret",
        "Eland",
        "Elephant",
        "Elk",
        "Emu",
        "Ermine",
        "Falcon",
        "Ferret",
        "Finch",
        "Firefly",
        "Fish",
        "Flamingo",
        "Flounder",
        "Fly",
        "Fox",
        "Frog",
        "Gaur",
        "Gazelle",
        "Gecko",
        "Gerbil",
        "Gibbon",
        "Giraffe",
        "Gnat",
        "Gnu",
        "Goat",
        "Goldfinch",
        "Goldfish",
        "Goose",
        "Gorilla",
        "Goshawk",
        "Grasshopper",
        "Grebe",
        "Grouse",
        "Guanaco",
        "Guineapig",
        "Gull",
        "Guppy",
        "Haddock",
        "Halibut",
        "Hamster",
        "Hare",
        "Hawk",
        "Hedgehog",
        "Heron",
        "Herring",
        "Hippopotamus",
        "Hornet",
        "Horse",
        "Human",
        "Hummingbird",
        "Hyena",
        "Hyrax",
        "Ibex",
        "Ibis",
        "Iguana",
        "Impala",
        "Jackal",
        "Jackrabbit",
        "Jaguar",
        "Jay",
        "Jellyfish",
        "Kangaroo",
        "Kestrel",
        "Kingfisher",
        "Kiwi",
        "Koala",
        "Komodo",
        "Kookabura",
        "Kouprey",
        "Krill",
        "Kudu",
        "Ladybird",
        "Lapwing",
        "Lark",
        "Leech",
        "Lemur",
        "Leopard",
        "Limpet",
        "Lion",
        "Lizard",
        "Llama",
        "Lobster",
        "Locust",
        "Loris",
        "Louse",
        "Lynx",
        "Lyrebird",
        "Macaw",
        "Mackerel",
        "Magpie",
        "Mallard",
        "Mammoth",
        "Manatee",
        "Mandrill",
        "Mantis",
        "Marmot",
        "Marten",
        "Meerkat",
        "Millipede",
        "Mink",
        "Mole",
        "Mongoose",
        "Monkey",
        "Moose",
        "Mosquito",
        "Moth",
        "Mouse",
        "Mule",
        "Mussel",
        "Narwhal",
        "Nautilus",
        "Newt",
        "Nightingale",
        "Numbat",
        "Ocelot",
        "Octopus",
        "Okapi",
        "Opossum",
        "Orangutan",
        "Orca",
        "Oryx",
        "Osprey",
        "Ostrich",
        "Otter",
        "Owl",
        "Ox",
        "Oyster",
        "Panda",
        "Pangolin",
        "Panther",
        "Parakeet",
        "Parrot",
        "Partridge",
        "Peafowl",
        "Pelican",
        "Penguin",
        "Perch",
        "Pheasant",
        "Pig",
        "Pigeon",
        "Piranha",
        "Platypus",
        "Polarbear",
        "Pony",
        "Porcupine",
        "Porpoise",
        "Possum",
        "Prairiedog",
        "Puffin",
        "Puma",
        "Python",
        "Quail",
        "Quelea",
        "Quetzal",
        "Quokka",
        "Quoll",
        "Rabbit",
        "Raccoon",
        "Rail",
        "Ram",
        "Rat",
        "Rattlesnake",
        "Raven",
        "Redpanda",
        "Reindeer",
        "Rhinoceros",
        "Robin",
        "Rook",
        "Sable",
        "Salamander",
        "Salmon",
        "Sandpiper",
        "Sardine",
        "Scorpion",
        "Seahorse",
        "Seal",
        "Sealion",
        "Seaotter",
        "Seaurchin",
        "Serval",
        "Shark",
        "Sheep",
        "Shrew",
        "Skunk",
        "Sloth",
        "Slug",
        "Snail",
        "Snake",
        "Snowleopard",
        "Sparrow",
        "Spider",
        "Spoonbill",
        "Squid",
        "Squirrel",
        "Starling",
        "Stingray",
        "Stinkbug",
        "Stoat",
        "Stork",
        "Sturgeon",
        "Swallow",
        "Swan",
        "Swordfish",
        "Tadpole",
        "Tapir",
        "Tarantula",
        "Tarsier",
        "Termite",
        "Tiger",
        "Toad",
        "Tortoise",
        "Toucan",
        "Trout",
        "Tuna",
        "Turkey",
        "Turtle",
        "Vicuña",
        "Viper",
        "Vole",
        "Vulture",
        "Wallaby",
        "Wallaroo",
        "Walrus",
        "Warthog",
        "Wasp",
        "Waterbuffalo",
        "Weasel",
        "Weevil",
        "Whale",
        "Wildebeest",
        "Wolf",
        "Wolverine",
        "Wombat",
        "Woodcock",
        "Woodpecker",
        "Worm",
        "Wren",
        "Xerus",
        "Yabby",
        "Yak",
        "Zebra",
        "Zebu"
    ]
    const keyValues: any = [
        {
            "symbol": "!"
        },
        {
            "symbol": "@"
        },
        {
            "symbol": "#"
        },
        {
            "symbol": "$"
        },
        {
            "symbol": "%"
        },
        {
            "symbol": "^"
        },
        {
            "symbol": "&"
        },
        {
            "symbol": "*"
        },
        {
            "symbol": "("
        }
    ]

    function numbers() {
        const rndInt1 = Math.floor(Math.random() * 8) + 1;
        const rndInt2min = Math.ceil(rndInt1 - 1);
        const rndInt2max = Math.floor(rndInt1 + 1);

        let rndInt2;
        let rndInt3;
        let rndInt3Max;
        let rndInt3Min;

        if (rndInt1 == 1) {
            rndInt2 = Math.floor(Math.random() * (rndInt2max - rndInt2min) + rndInt1);
        } else {
            rndInt2 = Math.floor(Math.random() * ((rndInt2max + 1) - rndInt2min) + rndInt2min);
        }

        if ((rndInt1 == rndInt2) && (rndInt1 == 1)) {
            rndInt3 = (rndInt2 + 1);
        } else if (rndInt1 == rndInt2) {
            rndInt3Max = Math.ceil(rndInt2 + 1);
            rndInt3Min = Math.floor(rndInt2 - 1);

            rndInt3 = Math.random() < 0.5 ? rndInt3Max : rndInt3Min;
        } else {
            rndInt3 = rndInt2;
        }

        return '' + rndInt1 + rndInt2 + rndInt3;
    }

    function selectRandom(data: string | any[]) {
        const randomDataPosition = Math.floor(Math.random() * data.length);
        return data[randomDataPosition];
    }

    const number = numbers();
    const lastNumber = Number(String(number).slice(-1));

    let randColour = selectRandom(colours);
    let randAnimal = selectRandom(animals);
    let keyValue = "";
    if (lastNumber){
        const keyPosition: number = Math.min(Math.max((lastNumber - 1),0),keyValues.length-1);
        keyValue =keyValues[keyPosition].symbol;
    }

    return {
        password: (randColour.name + randAnimal + number + keyValue).toString(),
        colour: (randColour.name).toString(),
        colourCode: (randColour.value).toString(),
        animal: randAnimal.toString(),
        number: Number(number),
        symbol: keyValue.toString(),
    }

}