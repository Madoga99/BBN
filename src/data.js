import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Spanish",
            artist: "Radio Cristiana",
            cover: "https://manuappshome.files.wordpress.com/2019/09/bbn-spain.png",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://audio-edge-5bkfj.fra.h.radiomast.io/475ebed1-595e-4717-b888-64fe8fc6b09f",
            active: true,
        },
        {
            name:"Portugues",
            artist: "Rádio Cristã",
            cover: "https://manuappshome.files.wordpress.com/2019/09/bbn-portugal.png",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://audio-edge-3mayu.fra.h.radiomast.io/ec065d59-f358-48c9-a288-4efc797e5860",
            active: false,
        },
        {
            name:"English",
            artist: "Christian Radio",
            cover: "https://manuappshome.files.wordpress.com/2019/09/bbn-ingles.png",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://audio-edge-3mayu.fra.h.radiomast.io/844b0a81-f4b9-485e-adaa-aab8d3ea9f7f",
            active: false,
        },
        {
            name:"German",
            artist: "Christliches Radio",
            cover: "https://manuappshome.files.wordpress.com/2019/09/bbn-alemania.png",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://audio-edge-cmc51.fra.h.radiomast.io/79ce8dd0-c0e9-4443-b887-0fdc1617f8bc",
            active: false,
        },
        {
            name:"Japanese",
            artist: "クリスチャンラジオ",
            cover: "https://manuappshome.files.wordpress.com/2019/09/bbn-japones.png",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://audio-edge-cmc51.fra.h.radiomast.io/a622d414-52a6-4426-b3b8-ed2a4dbb704b",
            active: false,
        },
        {
            name:"Chinesse",
            artist: "基督教廣播電台",
            cover: "https://manuappshome.files.wordpress.com/2019/09/bbn-china.png",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://audio-edge-cmc51.fra.h.radiomast.io/ce298b32-8776-4192-9900-092f44b63e7f",
            active: false,
        },
        {
            name:"Korean",
            artist: "기독교 라디오",
            cover: "https://manuappshome.files.wordpress.com/2019/09/bbn-korea.png",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "https://audio-edge-cmc51.fra.h.radiomast.io/79ce8dd0-c0e9-4443-b887-0fdc1617f8bc",
            active: false,
        },
        {
            name:"Russian",
            artist: "Христианское радио",
            cover: "https://manuappshome.files.wordpress.com/2019/09/bbn-rusia.png",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://audio-edge-cmc51.fra.h.radiomast.io/ce298b32-8776-4192-9900-092f44b63e7f",
            active: false,
        },
        {
            name:"BBN Radio Christian Gospel",
            artist: "Christian Radio",
            cover: "https://manuappshome.files.wordpress.com/2019/09/bbn-eeuu.png",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "http://radiocdn1.streamcomedia.com:5670/tprb1023fm",
            active: false,
        },
    ];
}

export default chillHop;

