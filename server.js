const request=require('request');
const cheerio=require('cheerio');
const fs =require('fs');
var i=0;
var urls = []; 
const arr = [];   // 29034
for(i=1000;i<=29034;i++) 
{
   var url= "http://hc.dayins.com/Home/CenterDetail/"+i;
 
//const URL = "http://hc.dayins.com/Home/CenterDetail/19768";

     
request(url,function(err,res,body)
{
    if (err)
    {
        console.log(err,"erro occured while hitting URL");
    }
    else
    {
        let $ = cheerio.load(body); 
        // $="#container > div:nth-child(1) > div.container > div.hd2 > div > div:nth-child(3) > span:nth-child(2) > i")

        var title =$('#container > div:nth-child(1) > div.container > div.hd2 > div > div:nth-child(1) > span').text() //.each(function(index){ 
            var address =$('#container > div:nth-child(1) > div.container > div.hd2 > div > div:nth-child(3) > span:nth-child(1)').text(); 
            var telhpone =$('#container > div:nth-child(1) > div.container > div.hd2 > div > div:nth-child(3) > span:nth-child(2)').text();   
            var contractno =$('#container > div:nth-child(1) > div.container > div.hd2 > div > div:nth-child(4) > span  ').text(); 
            var contractstart =$('#container > div:nth-child(1) > div.container > div.hd2 > div > div:nth-child(5) > span').text();    
            var contractend =$('#container > div:nth-child(1) > div.container > div.hd2 > div > div:nth-child(6) > span').text();
        //const contractend =$('').text();//*[@id="container"]/div[1]/div[3]/div[1]/div/div[2]/span[2]/text()
        const services =$('#container > div:nth-child(1) > div.container > div.sec2 > div > div > div > div:nth-child(2) > div').text();
          //*[@id="container"]/div[1]/div[3]/div[1]/div/div[2]/span[2] 
            const obj = { 
                title : title.trim().replace(/ \s/g, '').replace(/\s/g,' ').trim(), 
                address : address.trim().replace(/ \s/g, '').replace(/\s/g,' ').replace(/ \s/g, '').replace('نشانی:','').trim() ,
                telhpone:telhpone.trim().replace(/ \s/g, '').replace(/\s/g,' ').replace('شماره تماس:','').trim(),
                contractno:contractno.trim().replace(/ \s/g, '').replace(/\s/g,' ').replace('شماره قرارداد:','').trim(),
                contractstart:contractstart.trim().replace(/ \s/g, '').replace(/\s/g,' ').replace('تاریخ شروع قرارداد:','').trim(),
                contractend:contractend.trim().replace(/ \s/g, '').replace(/\s/g,' ').replace('تاریخ پایان قرارداد:','').trim(),
                services:services.trim().replace(/ \s/g, '').trim()
            }; 
             console.log(obj); 
            arr.push(JSON.stringify(obj)); 
          
      
       // console.log(arr.toString()); 
    }
}
)
}
    
    fs.writeFile('data.txt', arr, function (err) { 
        if(err) { 
            console.log(err); 
        } 
            else{ 
                console.log("success"); 
            } 
        });
 



 

  

  

