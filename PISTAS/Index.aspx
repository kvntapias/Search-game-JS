<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Index.aspx.cs" Inherits="PISTAS.Index" %>
<!DOCTYPE html>
<html>
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Juego by Kvn</title>
    <link href="Public/css.css" rel="stylesheet" type="text/css" />
     <link rel="icon" href="RES/anchor.png" type="image/gif" sizes="16x16">
</head>
<body>
    <div class="container">
        <h1>Juego! <h3 id="fin"></h3></h1>
        <h4>Encuentra los elementos segun las pistas - Tienes 1 Minuto</h4>
        <img src="RES/ship-2089747_960_720.jpg" class="mainImg" usemap="elementsMap" />
        <map name="elementsMap">
            <!--VELA-->
            <area id="obj1" class="obj" coords="0,100,203,90" shape="poly"  onclick="found1();" />
             <!--PROA-->
            <area id="obj2" class="obj" target="" title="" coords="158,484,30" shape="circle" onclick="found2();"/>
             <!--REMOS-->
            <area id="obj3" class="obj" target="" title="" shape="circle" onclick="found3();"/>
        </map>
        <div class="tiempos">
            <label>Tiempo:</label>
            <label class="count" id="contador">0</label><span>s</span>
        </div>
        <div class="opciones">
            <button onclick="getPista();" id="getPista">Siguiente pista!</button>
            <button onclick="reload();">Reiniciar juego</button>
        </div>
        <div class="msg">
            <label>Pista #<span id="#pista">1</span></label>
        <label id="pista" class="pista #"></label>
        </div>
    </div>
</body>
     <script src="Public/js.js"></script>
</html>
