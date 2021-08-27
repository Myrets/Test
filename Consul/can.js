$(function () {
var data = {"columns":[{"code":"Острів","name":"Острів","viewState":0,"isFileContent":false,"isFileName":false,"isPrintable":true,"hint":"","dataType":"Text"},
        {"code":"Локація","name":"Локація","viewState":0,"isFileContent":false,"isFileName":false,"isPrintable":true,"hint":"","dataType":"Text"},
        {"code":"Текст","name":"Текст","viewState":0,"isFileContent":false,"isFileName":false,"isPrintable":true,"hint":"","dataType":"Text"},
        {"code":"Дата","name":"Дата","viewState":0,"isFileContent":false,"isFileName":false,"isPrintable":true,"hint":"","dataType":"DateTime"},
        {"code":"Коментар","name":"Коментар","viewState":0,"isFileContent":false,"isFileName":false,"isPrintable":true,"hint":"","dataType":"Text"}],
        "rows":[{"values":["Труханов","Київ"," столиця та найбільше місто України, одне з найбільших і найстаріших міст Європи. Розташований у середній течії Дніпра, у північній Наддніпрянщині. Політичний, соціально-економічний, транспортний та освітньо-науковий центр країни. Окрема адміністративно-територіальна одиниця в складі України й адміністративний центр Київської області. Адміністративно до складу Київської області не входить. Місце розташування центральних органів влади України, іноземних місій, штаб-квартир більшості підприємств і громадських об'єднань, що працюють в Україні.","2020-12-12T00:00:00","Тестове"]}]};
    // console.log(data);
    var index=1;
    $.each(data.columns,function () {
        if (index==3)
        {
            $("#ul1").append("<li style='width: 800px; text-align: center' class='flax1'>"+this.code+"</li>");
        }
        else
        {
            $("#ul1").append("<li class='flax1'>"+this.code+"</li>");
        }
       index++;
    });
    $.each(data.rows,function () {
        for (var i=0;i<this.values.length;i++)
        {
            if (i==2)
            {
                $("#ul2").append("<li style='width: 800px;text-align: center' class='flrxContainer'>"+this.values[i]+"</li>");
            }
            else if (i==3)
            {
                var date=new Date(this.values[i]);
                $("#ul2").append("<li class='flrxContainer'>0"+(date.getDay()-5)+".0"+(date.getMonth()-10)+"."+(date.getFullYear()+1)+"</li>");
            }
            else
            {
                $("#ul2").append("<li class='flrxContainer'>"+this.values[i]+"</li>");
            }
        }
    });
});