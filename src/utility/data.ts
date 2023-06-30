interface Cover {
  img: string,
  title: string,
  type: string,
  subColor: string,
  imglist:string[],
}
const imgPath:string = './'; //圖片網址開頭
//放在public/下`${getAssetsFile('cover_healing.jpg')}`
const getAssetsFile = (url: string) => {
  return new URL(`../assets/imgs/${url}`, import.meta.url).href
}
//`${getAssetsFile('cover_tanpopo.jpg')}`
//放在assets/imgs/下
//兩種寫法：Cover[] 或 Array<Cover>
export const coverList: Cover[]= [
  {
    img:`${getAssetsFile('cover_money.jpg')}`,
    title:'借貸企業',
    type:'網頁設計',
    subColor:'#f9872a',
    imglist:[`${getAssetsFile('index_money.jpg')}`]
  },
  {
    img:`${getAssetsFile('cover_plants02.jpg')}`,
    title:'園藝植栽',
    type:'網頁設計',
    subColor:'#abc85d',
    imglist:[`${getAssetsFile('index_plants01.jpg')}`]
  },
  {
    img:`${getAssetsFile('cover_plants01.jpg')}`,
    title:'花藝植栽',
    type:'網頁設計',
    subColor:'#037f4a',
    imglist:[`${getAssetsFile('flower.jpg')}`]

  },
  {
    img:`${getAssetsFile('cover_client.jpg')}`,
    title:'牙醫診所',
    type:'網頁設計',
    subColor:'#164b75',
    imglist:[`${getAssetsFile('index_client.jpg')}`]
  },
  {
    img:`${getAssetsFile('cover_textile.jpg')}`,
    title:'布料企業',
    type:'網頁設計',
    subColor:'#0d308f',
    imglist:[`${getAssetsFile('index_textile.jpg')}`]
  },
  {
    img:`${getAssetsFile('cover_cake2.jpg')}`,
    title:'甜點蛋糕',
    type:'網頁設計',
    subColor:'#53290b',
    imglist:[`${getAssetsFile('index_cake2.jpg')}`]
  },
  {
    img:`${getAssetsFile('cover_cake.jpg')}`,
    title:'甜點蛋糕',
    type:'網頁設計',
    subColor:'#333333',
    imglist:[`${getAssetsFile('index_cake.jpg')}`]
  },
  {
    img:`${getAssetsFile('cover_food.jpg')}`,
    title:'素食餐飲',
    type:'網頁設計',
    subColor:'#1e8a1a',
    imglist:[`${getAssetsFile('index_food.jpg')}`]
  },
  {
    img:`${getAssetsFile('cover_tanpopo.jpg')}`,
    title:'手作布包',
    type:'Logo識別設計',
    subColor:'#a87532',
    imglist:[`${getAssetsFile('design_concept.jpg')}`,`${getAssetsFile('design_concept2.jpg')}`]
  },
  {
    img:`${getAssetsFile('cover_healing.jpg')}`,
    title:'手作耳環',
    type:'Logo識別設計',
    subColor:'#045357',
    imglist:[`${getAssetsFile('logo_design_concept.jpg')}`,`${getAssetsFile('logo_design_concept2.jpg')}`]
  },
  {
    img:`${getAssetsFile('cover_award.jpg')}`,
    title:'設計競賽',
    type:'Logo識別設計',
    subColor:'#e6b907',
    imglist:[`${getAssetsFile('taipei_08.jpg')}`,`${getAssetsFile('taipei_03.jpg')}`,`${getAssetsFile('taipei_05.jpg')}`]
  },
]
