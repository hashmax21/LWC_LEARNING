import { LightningElement } from 'lwc';
const URL = 'https://www.googleapis.com/books/v1/volumes?q='
export default class Bookapp extends LightningElement {
 //   url = 'https://www.googleapis.com/books/v1/volumes?q='
    key = 'man'
    timer
    bookData
connectedCallback(){
    this.fetchBookData()
}

    fetchBookData(){
        fetch(URL + this.key).then((response)=> response.json())
        .then((data)=>
        {
           /* data.items.forEach(element => {
                if (!element.volumeInfo.imageLinks){
                    element.volumeInfo.imageLinks = 
                    {smallThumbnail:'https://books.google.com/books/content?id=NQblqMiV…=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'}
                }
            });*/
            this.bookData = data
            console.log(data)}
        ).catch((error)=>console.error(error))
    }

    searchHandler(event){
        this.key = event.target.value
        window.clearTimeout(this.timer)
        this.timer = setTimeout(()=>{this.fetchBookData()},1000)
    }

   
}

/*x = {hh: "jhgfuyghbj"}
if(!x)
{
    x = {}
}*/