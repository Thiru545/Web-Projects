function tab_ins(){
    var ins = document.getElementById("instruction");
    var des = document.getElementById("description");
    var tab_ins = document.getElementById("ins-tab");
    var tab_des = document.getElementById("des-tab");

    if(ins.style.display === "none")
    {
        ins.style.display = "block";
        des.style.display = "none";

        tab_ins.style.backgroundColor = "#3c3cffc9";
        tab_ins.style.color = "white";

        
        tab_des.style.backgroundColor = "#4542391f";
        tab_des.style.color = "black";

    }
    else
    {
        des.style.display = "none";
    }


}

function tab_des(){
    var ins = document.getElementById("instruction");
    var des = document.getElementById("description");
    var tab_ins = document.getElementById("ins-tab");
    var tab_des = document.getElementById("des-tab");
    if(des.style.display === "none")
    {
        des.style.display = "block";
        ins.style.display = "none";

        tab_des.style.backgroundColor = "#3c3cffc9";
        tab_des.style.color = "white";

        tab_ins.style.backgroundColor = "#4542391f";
        tab_ins.style.color = "black";
    }
    else
    {
        ins.style.display = "none";
        des.style.display = "block";

        tab_des.style.backgroundColor = "#3c3cffc9";
        tab_des.style.color = "white";

        tab_ins.style.backgroundColor = "#4542391f";
        tab_ins.style.color = "black";
    }
}
