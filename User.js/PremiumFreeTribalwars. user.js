// ==UserScript==
// @name                Global Pack Premium Tribal Wars
// @namespace           @@marcosvinicius.santosmarques
// @icon                https://i.imgur.com/7WgHTT8.gif
// @website             https://tribalwarsbr100.wixsite.com/tw100
// @email               tribalwarsbr100@gmail.com
// @description 	    Ferramenta simulatoria do conteudo conhecido como premium, no game tribal wars, com diversas funções em javascript do qual compoem o Pack Premium
// @codigo              Conteudo feito em linguagem javascript com base em EcmaScript totalmente Opensource
// @author		        Marcos v.s Marques
// @include             http*://*.*game.php*
// @version     	    0.0.1
// @updateURL		    dfdf
// @downloadURL         dfdf
// @supportURL          dfdf
// @grant               GM_getResourceText
// @grant               GM_addStyle
// @grant               GM_getValue
// @grant               unsafeWindow
// ==/UserScript==


var acessosgame = location.hostname.split('.').shift();  //obter o dominio

function searchParam(){                                  //Pesquisar Parâmetro
	var p = '';
	for (i = 1; i < location.search.length; i++) {
		p += location.search.charAt(i);                  //Definido a propriedade de pesquisa:
	}
	t = p.split('&');
	p = [];
	t.forEach(function(value){
		var temp = [];
		temp.push(value.split('=')[0])
		temp.push(value.split('=')[1])
		p.push(temp)
	})
	return p;
}

function getParam(p){
	res = false;
	searchParam().forEach(function (value) {
		if (value[0] == p) {
			res = value[1]
		}
	})
	return res;
}

// Abaixo temos inserção do elemento javascript dentro do html
// logo em seguida somos abragidos pelo elemento chave 'beforebegin' = Antes do elemento.
// todo seguimento a seguir dentro desse elemento chave se trata do painel premium QuickBar do qual e intitulado de 'header_info'

document.getElementById('header_info').insertAdjacentHTML('beforebegin', `
<table id="quickbar_outer" align="center" width="100%" cellspacing="0">
					<tbody><tr>
						<td>
							<table id="quickbar_inner" style="border-collapse: collapse;" width="100%">
								<tbody><tr class="topborder">
									<td class="left"> </td>
									<td class="main"> </td>
									<td class="right"> </td>
								</tr>
								<tr>
									<td class="left"> </td>
									<td id="quickbar_contents" class="main">
										<ul class="menu quickbar">
											

                                                    <li class="quickbar_item" data-hotkey="1">
																<span>
																	<a class="quickbar_link" data-hash="7843128499689e43baba42bab06dc4fa" href="/game.php?village=` + getParam('village') + `&amp;screen=main">
																		<img class="quickbar_image" data-src="https://dsbr.innogamescdn.com/8.107/35533/graphic//buildings/main.png" alt="" src="https://dsbr.innogamescdn.com/8.107/35533/graphic//buildings/main.png">Edificio Principal
																	</a>
																</span>
													</li>

													<li class="quickbar_item" data-hotkey="2">
																<span>
																	<a class="quickbar_link" data-hash="d19a9592b32578e63c1cb2dffa78cbe2" href="/game.php?village=` + getParam('village') + `&amp;screen=train">
																		<img class="quickbar_image" data-src="https://dsbr.innogamescdn.com/8.107/35533/graphic//buildings/barracks.png" alt="" src="https://dsbr.innogamescdn.com/8.107/35533/graphic//buildings/barracks.png">Recrutar
																	</a>
																</span>
													</li>

													<li class="quickbar_item" data-hotkey="3">
																<span>
																	<a class="quickbar_link" data-hash="8708802b51699a4f36571e77aedce6e2" href="/game.php?village=` + getParam('village') + `&amp;screen=snob">
																		<img class="quickbar_image" data-src="https://dsbr.innogamescdn.com/8.107/35533/graphic//buildings/snob.png" alt="" src="https://dsbr.innogamescdn.com/8.107/35533/graphic//buildings/snob.png">Academia
																	</a>
																</span>
													</li>

													<li class="quickbar_item" data-hotkey="4">
																<span>
																	<a class="quickbar_link" data-hash="3f69e37073fa8329448b02773dadd5ef" href="/game.php?village=` + getParam('village') + `&amp;screen=smith">
																		<img class="quickbar_image" data-src="https://dsbr.innogamescdn.com/8.107/35533/graphic//buildings/smith.png" alt="" src="https://dsbr.innogamescdn.com/8.107/35533/graphic//buildings/smith.png">Ferreiro
																	</a>
																</span>
													</li>

													<li class="quickbar_item" data-hotkey="5">
																<span>
																	<a class="quickbar_link" data-hash="cc5ffd9297792b3360ffc14dba7edf5f" href="/game.php?village=` + getParam('village') + `&amp;screen=place">
																		<img class="quickbar_image" data-src="https://dsde.innogamescdn.com/8.78/32721/graphic//buildings/place.png" alt="" src="https://dsde.innogamescdn.com/8.78/32721/graphic//buildings/place.png">Praça de reunião
																	</a>
																</span>
													</li>
																																																													 
													<li class="quickbar_item" data-hotkey="6">
																<span>
																	<a class="quickbar_link" data-hash="7d6f4d2c6f77d1637b4c3578dffa4b47" href="/game.php?village=` + getParam('village') + `&amp;screen=market">
																		<img class="quickbar_image" data-src="https://dsde.innogamescdn.com/8.78/32721/graphic//buildings/market.png" alt="" src="https://dsde.innogamescdn.com/8.78/32721/graphic//buildings/market.png">Mercado
																	</a>
																</span>
													</li>
										
                                             																		</ul>
									</td>
									<td class="right"> </td>
								</tr>
								<tr class="bottomborder">
									<td class="left"> </td>
									<td class="main"> </td>
									<td class="right"> </td>
								</tr>
								<tr>
									<td class="shadow" colspan="3">
										<div class="leftshadow"> </div>
										<div class="rightshadow"> </div>
									</td>
								</tr>
							</tbody></table>
						</td>
					</tr>
				</tbody></table>
`);


// Abaixo ainda com o elemento chave 'beforebegin' = Antes do elemento.
// todo seguimento a seguir dentro desse elemento chave se trata do painel premium Mapa do qual e intitulado de 'map_topo'

if(document.getElementById('map_topo')) document.getElementById('map_topo').insertAdjacentHTML('beforeend', `
<br>
<table class="vis" width="100%">
	<tbody><tr>
		<th colspan="2">Configurar Mapas</th>
	</tr>
	<tr>
		<td><table cellspacing="0"><tbody><tr>
		<td width="80">Mapa:</td>
		<td>
			<select id="map_chooser_select" onchange="TWMap.resize(parseInt($('#map_chooser_select').val()), true)">
				<option id="current-map-size" value="13x14" selected="selected">13x14</option>
								<option value="4">4x4</option>
								<option value="5">5x5</option>
								<option value="7">7x7</option>
								<option value="9">9x9</option>
								<option value="11">11x11</option>
								<option value="13">13x13</option>
								<option value="15">15x15</option>
								<option value="20">20x20</option>
								<option value="30">30x30</option>
											</select>
			</td>
						<td valign="middle">
				<img class="" src="https://dsde.innogamescdn.com/8.78/32721/graphic//questionmark.png" width="13" height="13">
			</td>
						</tr></tbody></table>
			<input value="/game.php?village=` + getParam('village') + `&amp;screen=settings&amp;ajaxaction=set_map_size&amp;h=c22599c6" id="change_map_size_link" type="hidden">
		</td>
	</tr>
	<tr>
		<td><table cellspacing="0"><tbody><tr>
		<td width="80">Mini mapa:</td>
		<td colspan="2">
			<select id="minimap_chooser_select" onchange="TWMap.resizeMinimap(parseInt($('#minimap_chooser_select').val()), true)">
				<option id="current-minimap-size" value="50x50" style="display:none;">
				50x50</option>
								<option value="20">20x20</option>
								<option value="30">30x30</option>
								<option value="40">40x40</option>
								<option value="50" selected="selected">50x50</option>
								<option value="60">60x60</option>
								<option value="70">70x70</option>
								<option value="80">80x80</option>
								<option value="90">90x90</option>
								<option value="100">100x100</option>
								<option value="110">110x110</option>
								<option value="120">120x120</option>
							</select>
			</td>
			</tr></tbody></table>
			<input value="/game.php?amp;screen=settings&amp;ajaxaction=set_map_size&amp;h=c22599c6" id="change_map_size_link" type="hidden">
		</td>
	</tr>
</tbody></table>
`);


// Abaixo com o elemento chave 'afterbegin' = Dentro do elemento, antes de seu primeiro filho
// todo seguimento a seguir dentro desse elemento chave se trata do painel premium Setas,troca de aldeias do qual e intitulado de 'menu_row2'

if(document.getElementById('menu_row2')) document.getElementById('menu_row2').insertAdjacentHTML('afterbegin', `

<!-- Comando de Setas ←()→ Aldeias -->

 	<td class="box-item icon-box separate arrowCell">
 	<a id="village_switch_left" class="Avanço_aldeias" href="javascript:$.getScript('https://pastebin.com/raw.php?i=P0SaVxPC');" accesskey="a">
 	<span class="groupLeft"> </span>
 	</a>
 	</td>


 	<td class="box-item icon-box arrowCell">
 	<a id="village_switch_right" class="Avanço_aldeias" href="javascript:$.getScript('https://pastebin.com/raw.php?i=A9QEfX4i');" accesskey="d">
 	<span class="groupRight"> </span>
 	</a>
 	</td>
`);


if(document.createElement('menu_row2_village')) document.getElementById('menu_row2_village').insertAdjacentHTML('beforeend',`

<!-- Menu Grupo de Aldeias Comando de Seta (↓) -->

<td class="box-item">
<tr><td class="menu-column-item"><a href="javascript:$.getScript('https://pastebin.com/raw.php?i=rhNWWsLa');void(0);" <span class="icon header arr_down"></span></a></td></tr>

	                                        </td>

	
`);
if(document.getElementById('menu_row')) document.getElementById('menu_row').insertAdjacentHTML('afterbegin', `
                                      
										<!-- Pack Script
 |_   _| \ \      / /   / |  / _ \   / _ \
   | |    \ \ /\ / /    | | | | | | | | | |
   | |     \ V  V /     | | | |_| | | |_| |
   |_|      \_/\_/      |_|  \___/   \___/
                                            -->

										<td class="menu-item">
											<a href="game.php?screen=ranking&mode=ally&rank=1">
												<img img width="12px" height="12px"  src="https://imgur.com/hVpSoea.png"  alt="" src="https://imgur.com/hVpSoea.png"><marquee scrolldelay="300"><font color=#FFFF00>Tա 𝟙⊘⊘</font></marquee></span>
											
											</a>
<table cellspacing="0" class="menu_column"><tbody>

<tr><td class="menu-column-item"><a style="color: #FFB90F" href="javascript:$.getScript('https://pastebin.com/raw.php?i=nQh1McJw');void(0);" class="footer-link" target="_blank">&nbsp<img img width="12px" height="12px"  src="https://imgur.com/hVpSoea.png"  alt="" src="https://imgur.com/hVpSoea.png"> Sac </a></td></tr>
<tr><td class="menu-column-item"><a style="color: #FFB90F" href="https://tribalwarsbr100.wixsite.com/tw100" class="footer-link" target="_blank">&nbsp<img img width="12px" height="12px"  src="https://imgur.com/hVpSoea.png"  alt="" src="https://imgur.com/hVpSoea.png"> Site Tw100 </a></td></tr>
<tr><td class="menu-column-item"><a style="color: #FFB90F" href="javascript:$.getScript('https://goo.gl/KmDTbf');void(0);">&nbsp<img img width="12px" height="12px"  src="https://imgur.com/hVpSoea.png"  alt="" src="https://imgur.com/hVpSoea.png"> Coletor Coord</a></td></tr>
<tr><td class="menu-column-item"><a style="color: #FFB90F" href="javascript:$.getScript('https://pastebin.com/raw.php?i=w70Zdu5M');void(0);">&nbsp<img img width="12px" height="12px"  src="https://imgur.com/hVpSoea.png"  alt="" src="https://dsbr.innogamescdn.com/8.107/35532/graphic/command/attack.png"> Auto Sniper</a></td></tr>
<tr><td class="menu-column-item"><a style="color: #FFB90F" href="javascript:$.getScript('https://goo.gl/7gncjA');void(0);">&nbsp<img img width="12px" height="12px"  src="https://imgur.com/hVpSoea.png"  alt="" src="https://imgur.com/hVpSoea.png"> Grafico Evolução BR</a></td></tr>
<tr><td class="menu-column-item"><a style="color: #FFB90F" href="javascript:$.getScript('https://goo.gl/JVkrdu');void(0);">&nbsp<img img width="12px" height="12px"  src="https://imgur.com/hVpSoea.png"  alt="" src="https://imgur.com/hVpSoea.png"> Renomeador de Aldeias</a></td></tr>
<tr><td class="menu-column-item"><a style="color: #FFB90F" href="javascript:$.getScript('https://pastebin.com/raw.php?i=ug98hYVc');void(0);">&nbsp<img img width="12px" height="12px"  src="https://imgur.com/hVpSoea.png"  alt="" src="https://imgur.com/hVpSoea.png"> Fake</a></td></tr>
<tr><td class="menu-column-item"><a style="color: #FFB90F" href="javascript:$.getScript('https://pastebin.com/raw.php?i=8ze4jAaR');void(0);">&nbsp<img img width="12px" height="12px"  src="https://imgur.com/hVpSoea.png"  alt="" src="https://imgur.com/hVpSoea.png"> NT-Fake</a></td></tr>
<tr><td class="menu-column-item"><a style="color: #FFB90F" href="javascript:$.getScript('https://dl.dropbox.com/s/9t789lozrzk3ril/Auto%20attack.js?dl=0');void(0);">&nbsp<img img width="12px" height="12px"  src="https://imgur.com/hVpSoea.png"  alt="" src=https://imgur.com/hVpSoea.png"> Assistente Farm</a></td></tr>
<tr><td class="menu-column-item"><a style="color: #FFB90F" href="javascript:$.getScript('https://dl.dropboxusercontent.com/s/1kfp8ja9k9io86b/Tsalkapone.rally_point_script.js');void(0);">&nbsp<img img width="12px" height="12px"  src="https://imgur.com/hVpSoea.png"  alt="" src="https://imgur.com/hVpSoea.png"> TK-Gr</a></td></tr>
<tr><td class="menu-column-item"><a style="color: #FFB90F" href="javascript:$.getScript('https://pastebin.com/raw.php?i=Ujz66LsW');void(0);">&nbsp<img img width="12px" height="12px"  src="https://imgur.com/hVpSoea.png"  alt="" src="https://imgur.com/hVpSoea.png"> Nick player</a></td></tr>
<tr><td class="menu-column-item"><a style="color: #FFB90F" href="javascript:$.getScript('https://pastebin.com/raw.php?i=LH2x2Ti4');void(0);">&nbsp<img img width="12px" height="12px"  src="https://imgur.com/hVpSoea.png"  alt="" src="https://imgur.com/hVpSoea.png"> Vilas Saqueadas Dia</a></td></tr>
<tr><td class="menu-column-item"><a style="color: #FFB90F" href="javascript:$.getScript('https://pastebin.com/raw.php?i=HqZLHkPN');void(0);">&nbsp<img img width="12px" height="12px"  src="https://imgur.com/hVpSoea.png"  alt="" src="https://imgur.com/hVpSoea.png"> Farm Dia</a></td></tr>
<tr><td class="menu-column-item"><a style="color: #FFB90F" href="javascript:$.getScript('https://pastebin.com/raw.php?i=UKqnthb6');void(0);">&nbsp<img img width="12px" height="12px"  src="https://imgur.com/hVpSoea.png"  alt="" src="https://imgur.com/hVpSoea.png"> Atacante Dia</a></td></tr>
<tr><td class="menu-column-item"><a style="color: #FFB90F" href="javascript:$.getScript('https://pastebin.com/raw.php?i=a3qrpP2Z');void(0);">&nbsp<img img width="12px" height="12px"  src="https://imgur.com/hVpSoea.png"  alt="" src="https://imgur.com/hVpSoea.png"> Defensor Dia</a></td></tr>
<tr><td class="menu-column-item"><a style="color: #FFB90F" href="javascript:$.getScript('https://pastebin.com/raw.php?i=eHXqxuz9');void(0);">&nbsp<img img width="12px" height="12px"  src="https://imgur.com/hVpSoea.png"  alt="" src="https://imgur.com/hVpSoea.png"> Apoio Dia</a></td></tr>
<tr><td class="menu-column-item"><a style="color: #FFB90F" href="javascript:$.getScript('https://dl.dropbox.com/s/dyjqtbfa5ajaj95/Criar%20Ofertas.js?dl=0');void(0);">&nbsp<img img width="12px" height="12px"  src="https://imgur.com/hVpSoea.png"  alt="" src="https://imgur.com/hVpSoea.png"> Criar Ofertas Mercado</a></td></tr>
<tr><td class="menu-column-item"><a style="color: #FFB90F" href="https://tribalwarsbr100.wixsite.com/tw100/ocupacaofazenda" class="footer-link" target="_blank">&nbsp<img img width="12px" height="12px"  src="https://imgur.com/hVpSoea.png"  alt="" src="https://imgur.com/hVpSoea.png"> Ocup Fazenda </a></td></tr>
<tr><td class="menu-column-item"><a href="/game.php?village=4694&amp;screen=premium&amp;mode=log">Histórico de pontos</a></td></tr>
<tr><td class="bottom"><div class="corner"></div><div class="decoration"></div></td></tr></tbody></table>


										</td>


`);



if(document.getElementById('leftcolumn')) document.getElementById('leftcolumn').insertAdjacentHTML('beforeend',`






`);





if(document.getElementById('l_wall')) document.getElementById('order_level_wall').insertAdjacentHTML('beforeend',`






`);


if(document.getElementById('contentContainer')) document.getElementById('contentContainer').insertAdjacentHTML('beforeend', `

<script type="text/javascript" language="javascript" src="./textSlide.js"></script>
<style type="text/css" media="screen">
	@import url("./estilo.css");
</style>

</head>

<p style="color: #FF0000" align="right">
Criado por: <em>Marcos Vs Marques</em><br />
Email: <em>tribalwarsbr100@gmail.com</em>
</p>


`);

if(document.getElementById('premium_points')) document.getElementById('premium_points').insertAdjacentHTML('afterbegin', `

<span id="premium_points">82</span>




`);


if(document.getElementById('village_3129')) document.getElementById('village_3129').insertAdjacentHTML('beforeend', `

<tr id="village_3129" class="selected">
                    <td><a href="/game.php?village=3129&amp;screen=snob">000 K45 (529|451) K45</a></td>
            <td class="nowrap resources"><span class="warn wood">400<span class="grey">.</span>000</span> <span class="warn stone">400<span class="grey">.</span>000</span> <span class="warn iron">400<span class="grey">.</span>000</span> </td>
            <td>400000</td>
            <td>
                                    <select id="id_3129" name="id_3129" class="select_coins">
                                        <option value="0">- nenhuma -</option>
                                        <option value="1">1x (21840, 23400, 19500)</option>
                                        <option value="2">2x (43680, 46800, 39000)</option>
                                        <option value="3">3x (65520, 70200, 58500)</option>
                                        <option value="4">4x (87360, 93600, 78000)</option>
                                        <option value="5">5x (109200, 117000, 97500)</option>
                                        <option value="6">6x (131040, 140400, 117000)</option>
                                        <option value="7">7x (152880, 163800, 136500)</option>
                                        <option value="8">8x (174720, 187200, 156000)</option>
                                        <option value="9">9x (196560, 210600, 175500)</option>
                                        <option value="10">10x (218400, 234000, 195000)</option>
                                        <option value="11">11x (240240, 257400, 214500)</option>
                                        <option value="12">12x (262080, 280800, 234000)</option>
                                        <option value="13">13x (283920, 304200, 253500)</option>
                                        <option value="14">14x (305760, 327600, 273000)</option>
                                        <option value="15">15x (327600, 351000, 292500)</option>
                                        <option value="16">16x (349440, 374400, 312000)</option>
                                        <option value="17">17x (371280, 397800, 331500)</option>
                                    </select>
                        </td>
        </tr>



`);


if(document.getElementById('coin_overview_table')) document.getElementById('coin_overview_table').insertAdjacentHTML('beforeend', `

<table id="coin_overview_table" class="vis overview_table" width="100%">
    <tbody><tr>
	<td colspan="3">
		<input type="button" class="mint_multi_button btn" value="Cunhar moedas de ouro" dcvalue="Cunhar moedas de ouro">
		(<span id="selectedBunches_top">0</span> x <img src="https://dsbr.innogamescdn.com/8.111/35816/graphic/gold.png" title="" alt="" class="">)
	</td>
		<td>
		<select name="coin_amount" class="coin_amount">
						<option value="17">17x</option>
						<option value="16">16x</option>
						<option value="15">15x</option>
						<option value="14">14x</option>
						<option value="13">13x</option>
						<option value="12">12x</option>
						<option value="11">11x</option>
						<option value="10">10x</option>
						<option value="9">9x</option>
						<option value="8">8x</option>
						<option value="7">7x</option>
						<option value="6">6x</option>
						<option value="5">5x</option>
						<option value="4">4x</option>
						<option value="3">3x</option>
						<option value="2">2x</option>
						<option value="1">1x</option>
						<option value="0">0x</option>
						<option value="-1">Maximo -1x</option>
						<option value="-2">Maximo -2x</option>
						<option value="-3">Maximo -3x</option>
						<option value="-4">Maximo -4x</option>
						<option value="-5">Maximo -5x</option>
						<option value="-6">Maximo -6x</option>
						<option value="-7">Maximo -7x</option>
						<option value="-8">Maximo -8x</option>
						<option value="-9">Maximo -9x</option>
						<option value="-10">Maximo -10x</option>
						<option value="-11">Maximo -11x</option>
						<option value="-12">Maximo -12x</option>
						<option value="-13">Maximo -13x</option>
						<option value="-14">Maximo -14x</option>
						<option value="-15">Maximo -15x</option>
						<option value="-16">Maximo -16x</option>
					</select>
		<input id="select_anchor_top" type="button" class="btn" value="Selecionar" dcvalue="Selecionar">
	</td>

</tr>            <tr>
            <th>Aldeia</th><th>Recursos</th><th>Armazém</th><th>Selecionar quantidade</th>
        </tr>
                <tr id="village_3129" class="selected">
                    <td><a href="/game.php?village=3129&amp;screen=snob">000 K45 (529|451) K45</a></td>
            <td class="nowrap resources"><span class="warn wood">400<span class="grey">.</span>000</span> <span class="warn stone">400<span class="grey">.</span>000</span> <span class="warn iron">400<span class="grey">.</span>000</span> </td>
            <td>400000</td>
            <td>
                                    <select id="id_3129" name="id_3129" class="select_coins">
                                        <option value="0">- nenhuma -</option>
                                        <option value="1">1x (21840, 23400, 19500)</option>
                                        <option value="2">2x (43680, 46800, 39000)</option>
                                        <option value="3">3x (65520, 70200, 58500)</option>
                                        <option value="4">4x (87360, 93600, 78000)</option>
                                        <option value="5">5x (109200, 117000, 97500)</option>
                                        <option value="6">6x (131040, 140400, 117000)</option>
                                        <option value="7">7x (152880, 163800, 136500)</option>
                                        <option value="8">8x (174720, 187200, 156000)</option>
                                        <option value="9">9x (196560, 210600, 175500)</option>
                                        <option value="10">10x (218400, 234000, 195000)</option>
                                        <option value="11">11x (240240, 257400, 214500)</option>
                                        <option value="12">12x (262080, 280800, 234000)</option>
                                        <option value="13">13x (283920, 304200, 253500)</option>
                                        <option value="14">14x (305760, 327600, 273000)</option>
                                        <option value="15">15x (327600, 351000, 292500)</option>
                                        <option value="16">16x (349440, 374400, 312000)</option>
                                        <option value="17">17x (371280, 397800, 331500)</option>
                                    </select>
                        </td>
        </tr>
            <tr id="village_3086">
                    <td><a href="/game.php?village=3086&amp;screen=snob">001 K45 (531|453) K45</a></td>
            <td class="nowrap resources"><span class="warn wood">400<span class="grey">.</span>000</span> <span class="warn stone">400<span class="grey">.</span>000</span> <span class="warn iron">400<span class="grey">.</span>000</span> </td>
            <td>400000</td>
            <td>
                                    <select id="id_3086" name="id_3086" class="select_coins">
                                        <option value="0">- nenhuma -</option>
                                        <option value="1">1x (21840, 23400, 19500)</option>
                                        <option value="2">2x (43680, 46800, 39000)</option>
                                        <option value="3">3x (65520, 70200, 58500)</option>
                                        <option value="4">4x (87360, 93600, 78000)</option>
                                        <option value="5">5x (109200, 117000, 97500)</option>
                                        <option value="6">6x (131040, 140400, 117000)</option>
                                        <option value="7">7x (152880, 163800, 136500)</option>
                                        <option value="8">8x (174720, 187200, 156000)</option>
                                        <option value="9">9x (196560, 210600, 175500)</option>
                                        <option value="10">10x (218400, 234000, 195000)</option>
                                        <option value="11">11x (240240, 257400, 214500)</option>
                                        <option value="12">12x (262080, 280800, 234000)</option>
                                        <option value="13">13x (283920, 304200, 253500)</option>
                                        <option value="14">14x (305760, 327600, 273000)</option>
                                        <option value="15">15x (327600, 351000, 292500)</option>
                                        <option value="16">16x (349440, 374400, 312000)</option>
                                        <option value="17">17x (371280, 397800, 331500)</option>
                                    </select>
                        </td>
        </tr>
            <tr id="village_3054">
                    <td><a href="/game.php?village=3054&amp;screen=snob">002 K45 (533|454) K45</a></td>
            <td class="nowrap resources"><span class="warn wood">400<span class="grey">.</span>000</span> <span class="warn stone">400<span class="grey">.</span>000</span> <span class="warn iron">400<span class="grey">.</span>000</span> </td>
            <td>400000</td>
            <td>
                                    <select id="id_3054" name="id_3054" class="select_coins">
                                        <option value="0">- nenhuma -</option>
                                        <option value="1">1x (22400, 24000, 20000)</option>
                                        <option value="2">2x (44800, 48000, 40000)</option>
                                        <option value="3">3x (67200, 72000, 60000)</option>
                                        <option value="4">4x (89600, 96000, 80000)</option>
                                        <option value="5">5x (112000, 120000, 100000)</option>
                                        <option value="6">6x (134400, 144000, 120000)</option>
                                        <option value="7">7x (156800, 168000, 140000)</option>
                                        <option value="8">8x (179200, 192000, 160000)</option>
                                        <option value="9">9x (201600, 216000, 180000)</option>
                                        <option value="10">10x (224000, 240000, 200000)</option>
                                        <option value="11">11x (246400, 264000, 220000)</option>
                                        <option value="12">12x (268800, 288000, 240000)</option>
                                        <option value="13">13x (291200, 312000, 260000)</option>
                                        <option value="14">14x (313600, 336000, 280000)</option>
                                        <option value="15">15x (336000, 360000, 300000)</option>
                                        <option value="16">16x (358400, 384000, 320000)</option>
                                    </select>
                        </td>
        </tr>
            <tr id="village_12097">
                    <td><a href="/game.php?village=12097&amp;screen=snob">003 K53 (392|508) K53</a></td>
            <td class="nowrap resources"><span class="warn wood">400<span class="grey">.</span>000</span> <span class="warn stone">400<span class="grey">.</span>000</span> <span class="warn iron">400<span class="grey">.</span>000</span> </td>
            <td>400000</td>
            <td>
                                    <select id="id_12097" name="id_12097" class="select_coins">
                                        <option value="0">- nenhuma -</option>
                                        <option value="1">1x (24080, 25800, 21500)</option>
                                        <option value="2">2x (48160, 51600, 43000)</option>
                                        <option value="3">3x (72240, 77400, 64500)</option>
                                        <option value="4">4x (96320, 103200, 86000)</option>
                                        <option value="5">5x (120400, 129000, 107500)</option>
                                        <option value="6">6x (144480, 154800, 129000)</option>
                                        <option value="7">7x (168560, 180600, 150500)</option>
                                        <option value="8">8x (192640, 206400, 172000)</option>
                                        <option value="9">9x (216720, 232200, 193500)</option>
                                        <option value="10">10x (240800, 258000, 215000)</option>
                                        <option value="11">11x (264880, 283800, 236500)</option>
                                        <option value="12">12x (288960, 309600, 258000)</option>
                                        <option value="13">13x (313040, 335400, 279500)</option>
                                        <option value="14">14x (337120, 361200, 301000)</option>
                                        <option value="15">15x (361200, 387000, 322500)</option>
                                    </select>
                        </td>
        </tr>
            <tr id="village_2818">
                    <td><a href="/game.php?village=2818&amp;screen=snob">004 K45 (530|456) K45</a></td>
            <td class="nowrap resources"><span class="warn wood">400<span class="grey">.</span>000</span> <span class="warn stone">400<span class="grey">.</span>000</span> <span class="warn iron">400<span class="grey">.</span>000</span> </td>
            <td>400000</td>
            <td>
                                    <select id="id_2818" name="id_2818" class="select_coins">
                                        <option value="0">- nenhuma -</option>
                                        <option value="1">1x (28000, 30000, 25000)</option>
                                        <option value="2">2x (56000, 60000, 50000)</option>
                                        <option value="3">3x (84000, 90000, 75000)</option>
                                        <option value="4">4x (112000, 120000, 100000)</option>
                                        <option value="5">5x (140000, 150000, 125000)</option>
                                        <option value="6">6x (168000, 180000, 150000)</option>
                                        <option value="7">7x (196000, 210000, 175000)</option>
                                        <option value="8">8x (224000, 240000, 200000)</option>
                                        <option value="9">9x (252000, 270000, 225000)</option>
                                        <option value="10">10x (280000, 300000, 250000)</option>
                                        <option value="11">11x (308000, 330000, 275000)</option>
                                        <option value="12">12x (336000, 360000, 300000)</option>
                                        <option value="13">13x (364000, 390000, 325000)</option>
                                    </select>
                        </td>
        </tr>
            <tr id="village_22593">
                    <td><a href="/game.php?village=22593&amp;screen=snob">005 K35 (521|350) K35</a></td>
            <td class="nowrap resources"><span class="warn wood">400<span class="grey">.</span>000</span> <span class="warn stone">400<span class="grey">.</span>000</span> <span class="warn iron">400<span class="grey">.</span>000</span> </td>
            <td>400000</td>
            <td>
                                    <select id="id_22593" name="id_22593" class="select_coins">
                                        <option value="0">- nenhuma -</option>
                                        <option value="1">1x (28000, 30000, 25000)</option>
                                        <option value="2">2x (56000, 60000, 50000)</option>
                                        <option value="3">3x (84000, 90000, 75000)</option>
                                        <option value="4">4x (112000, 120000, 100000)</option>
                                        <option value="5">5x (140000, 150000, 125000)</option>
                                        <option value="6">6x (168000, 180000, 150000)</option>
                                        <option value="7">7x (196000, 210000, 175000)</option>
                                        <option value="8">8x (224000, 240000, 200000)</option>
                                        <option value="9">9x (252000, 270000, 225000)</option>
                                        <option value="10">10x (280000, 300000, 250000)</option>
                                        <option value="11">11x (308000, 330000, 275000)</option>
                                        <option value="12">12x (336000, 360000, 300000)</option>
                                        <option value="13">13x (364000, 390000, 325000)</option>
                                    </select>
                        </td>
        </tr>
            <tr id="village_2911">
                    <td><a href="/game.php?village=2911&amp;screen=snob">006 K45 (529|455) K45</a></td>
            <td class="nowrap resources"><span class="warn wood">400<span class="grey">.</span>000</span> <span class="warn stone">400<span class="grey">.</span>000</span> <span class="warn iron">400<span class="grey">.</span>000</span> </td>
            <td>400000</td>
            <td>
                                    <select id="id_2911" name="id_2911" class="select_coins">
                                        <option value="0">- nenhuma -</option>
                                        <option value="1">1x (22400, 24000, 20000)</option>
                                        <option value="2">2x (44800, 48000, 40000)</option>
                                        <option value="3">3x (67200, 72000, 60000)</option>
                                        <option value="4">4x (89600, 96000, 80000)</option>
                                        <option value="5">5x (112000, 120000, 100000)</option>
                                        <option value="6">6x (134400, 144000, 120000)</option>
                                        <option value="7">7x (156800, 168000, 140000)</option>
                                        <option value="8">8x (179200, 192000, 160000)</option>
                                        <option value="9">9x (201600, 216000, 180000)</option>
                                        <option value="10">10x (224000, 240000, 200000)</option>
                                        <option value="11">11x (246400, 264000, 220000)</option>
                                        <option value="12">12x (268800, 288000, 240000)</option>
                                        <option value="13">13x (291200, 312000, 260000)</option>
                                        <option value="14">14x (313600, 336000, 280000)</option>
                                        <option value="15">15x (336000, 360000, 300000)</option>
                                        <option value="16">16x (358400, 384000, 320000)</option>
                                    </select>
                        </td>
        </tr>
            <tr id="village_2839">
                    <td><a href="/game.php?village=2839&amp;screen=snob">007 K45 (528|454) K45</a></td>
            <td class="nowrap resources"><span class="warn wood">400<span class="grey">.</span>000</span> <span class="warn stone">400<span class="grey">.</span>000</span> <span class="warn iron">400<span class="grey">.</span>000</span> </td>
            <td>400000</td>
            <td>
                                    <select id="id_2839" name="id_2839" class="select_coins">
                                        <option value="0">- nenhuma -</option>
                                        <option value="1">1x (24640, 26400, 22000)</option>
                                        <option value="2">2x (49280, 52800, 44000)</option>
                                        <option value="3">3x (73920, 79200, 66000)</option>
                                        <option value="4">4x (98560, 105600, 88000)</option>
                                        <option value="5">5x (123200, 132000, 110000)</option>
                                        <option value="6">6x (147840, 158400, 132000)</option>
                                        <option value="7">7x (172480, 184800, 154000)</option>
                                        <option value="8">8x (197120, 211200, 176000)</option>
                                        <option value="9">9x (221760, 237600, 198000)</option>
                                        <option value="10">10x (246400, 264000, 220000)</option>
                                        <option value="11">11x (271040, 290400, 242000)</option>
                                        <option value="12">12x (295680, 316800, 264000)</option>
                                        <option value="13">13x (320320, 343200, 286000)</option>
                                        <option value="14">14x (344960, 369600, 308000)</option>
                                        <option value="15">15x (369600, 396000, 330000)</option>
                                    </select>
                        </td>
        </tr>
            <tr id="village_3146">
                    <td><a href="/game.php?village=3146&amp;screen=snob">009 K45 (530|453) K45</a></td>
            <td class="nowrap resources"><span class="warn wood">400<span class="grey">.</span>000</span> <span class="warn stone">400<span class="grey">.</span>000</span> <span class="warn iron">400<span class="grey">.</span>000</span> </td>
            <td>400000</td>
            <td>
                                    <select id="id_3146" name="id_3146" class="select_coins">
                                        <option value="0">- nenhuma -</option>
                                        <option value="1">1x (23520, 25200, 21000)</option>
                                        <option value="2">2x (47040, 50400, 42000)</option>
                                        <option value="3">3x (70560, 75600, 63000)</option>
                                        <option value="4">4x (94080, 100800, 84000)</option>
                                        <option value="5">5x (117600, 126000, 105000)</option>
                                        <option value="6">6x (141120, 151200, 126000)</option>
                                        <option value="7">7x (164640, 176400, 147000)</option>
                                        <option value="8">8x (188160, 201600, 168000)</option>
                                        <option value="9">9x (211680, 226800, 189000)</option>
                                        <option value="10">10x (235200, 252000, 210000)</option>
                                        <option value="11">11x (258720, 277200, 231000)</option>
                                        <option value="12">12x (282240, 302400, 252000)</option>
                                        <option value="13">13x (305760, 327600, 273000)</option>
                                        <option value="14">14x (329280, 352800, 294000)</option>
                                        <option value="15">15x (352800, 378000, 315000)</option>
                                    </select>
                        </td>
        </tr>
            <tr id="village_3002">
                    <td><a href="/game.php?village=3002&amp;screen=snob">010 K45 (530|455) K45</a></td>
            <td class="nowrap resources"><span class="warn wood">400<span class="grey">.</span>000</span> <span class="warn stone">400<span class="grey">.</span>000</span> <span class="res iron">283<span class="grey">.</span>820</span> </td>
            <td>400000</td>
            <td>
                                    <select id="id_3002" name="id_3002" class="select_coins">
                                        <option value="0">- nenhuma -</option>
                                        <option value="1">1x (24080, 25800, 21500)</option>
                                        <option value="2">2x (48160, 51600, 43000)</option>
                                        <option value="3">3x (72240, 77400, 64500)</option>
                                        <option value="4">4x (96320, 103200, 86000)</option>
                                        <option value="5">5x (120400, 129000, 107500)</option>
                                        <option value="6">6x (144480, 154800, 129000)</option>
                                        <option value="7">7x (168560, 180600, 150500)</option>
                                        <option value="8">8x (192640, 206400, 172000)</option>
                                        <option value="9">9x (216720, 232200, 193500)</option>
                                        <option value="10">10x (240800, 258000, 215000)</option>
                                        <option value="11">11x (264880, 283800, 236500)</option>
                                        <option value="12">12x (288960, 309600, 258000)</option>
                                        <option value="13">13x (313040, 335400, 279500)</option>
                                    </select>
                        </td>
        </tr>
            <tr id="village_14418">
                    <td><a href="/game.php?village=14418&amp;screen=snob">011 K46 (616|488) K46</a></td>
            <td class="nowrap resources"><span class="warn wood">400<span class="grey">.</span>000</span> <span class="warn stone">400<span class="grey">.</span>000</span> <span class="res iron">336<span class="grey">.</span>701</span> </td>
            <td>400000</td>
            <td>
                                    <select id="id_14418" name="id_14418" class="select_coins">
                                        <option value="0">- nenhuma -</option>
                                        <option value="1">1x (28000, 30000, 25000)</option>
                                        <option value="2">2x (56000, 60000, 50000)</option>
                                        <option value="3">3x (84000, 90000, 75000)</option>
                                        <option value="4">4x (112000, 120000, 100000)</option>
                                        <option value="5">5x (140000, 150000, 125000)</option>
                                        <option value="6">6x (168000, 180000, 150000)</option>
                                        <option value="7">7x (196000, 210000, 175000)</option>
                                        <option value="8">8x (224000, 240000, 200000)</option>
                                        <option value="9">9x (252000, 270000, 225000)</option>
                                        <option value="10">10x (280000, 300000, 250000)</option>
                                        <option value="11">11x (308000, 330000, 275000)</option>
                                        <option value="12">12x (336000, 360000, 300000)</option>
                                        <option value="13">13x (364000, 390000, 325000)</option>
                                    </select>
                        </td>
        </tr>
            <tr id="village_3243">
                    <td><a href="/game.php?village=3243&amp;screen=snob">012 K45 (532|454) K45</a></td>
            <td class="nowrap resources"><span class="warn wood">400<span class="grey">.</span>000</span> <span class="warn stone">400<span class="grey">.</span>000</span> <span class="warn iron">400<span class="grey">.</span>000</span> </td>
            <td>400000</td>
            <td>
                                    <select id="id_3243" name="id_3243" class="select_coins">
                                        <option value="0">- nenhuma -</option>
                                        <option value="1">1x (28000, 30000, 25000)</option>
                                        <option value="2">2x (56000, 60000, 50000)</option>
                                        <option value="3">3x (84000, 90000, 75000)</option>
                                        <option value="4">4x (112000, 120000, 100000)</option>
                                        <option value="5">5x (140000, 150000, 125000)</option>
                                        <option value="6">6x (168000, 180000, 150000)</option>
                                        <option value="7">7x (196000, 210000, 175000)</option>
                                        <option value="8">8x (224000, 240000, 200000)</option>
                                        <option value="9">9x (252000, 270000, 225000)</option>
                                        <option value="10">10x (280000, 300000, 250000)</option>
                                        <option value="11">11x (308000, 330000, 275000)</option>
                                        <option value="12">12x (336000, 360000, 300000)</option>
                                        <option value="13">13x (364000, 390000, 325000)</option>
                                    </select>
                        </td>
        </tr>
            <tr id="village_11094">
                    <td><a href="/game.php?village=11094&amp;screen=snob">013 K53 (396|501) K53</a></td>
            <td class="nowrap resources"><span class="warn wood">400<span class="grey">.</span>000</span> <span class="warn stone">400<span class="grey">.</span>000</span> <span class="warn iron">400<span class="grey">.</span>000</span> </td>
            <td>400000</td>
            <td>
                                    <select id="id_11094" name="id_11094" class="select_coins">
                                        <option value="0">- nenhuma -</option>
                                        <option value="1">1x (28000, 30000, 25000)</option>
                                        <option value="2">2x (56000, 60000, 50000)</option>
                                        <option value="3">3x (84000, 90000, 75000)</option>
                                        <option value="4">4x (112000, 120000, 100000)</option>
                                        <option value="5">5x (140000, 150000, 125000)</option>
                                        <option value="6">6x (168000, 180000, 150000)</option>
                                        <option value="7">7x (196000, 210000, 175000)</option>
                                        <option value="8">8x (224000, 240000, 200000)</option>
                                        <option value="9">9x (252000, 270000, 225000)</option>
                                        <option value="10">10x (280000, 300000, 250000)</option>
                                        <option value="11">11x (308000, 330000, 275000)</option>
                                        <option value="12">12x (336000, 360000, 300000)</option>
                                        <option value="13">13x (364000, 390000, 325000)</option>
                                    </select>
                        </td>
        </tr>
            <tr id="village_3256">
                    <td><a href="/game.php?village=3256&amp;screen=snob">014 K45 (533|452) K45</a></td>
            <td class="nowrap resources"><span class="warn wood">325<span class="grey">.</span>337</span> <span class="warn stone">325<span class="grey">.</span>337</span> <span class="warn iron">325<span class="grey">.</span>337</span> </td>
            <td>325337</td>
            <td>
                                    <select id="id_3256" name="id_3256" class="select_coins">
                                        <option value="0">- nenhuma -</option>
                                        <option value="1">1x (28000, 30000, 25000)</option>
                                        <option value="2">2x (56000, 60000, 50000)</option>
                                        <option value="3">3x (84000, 90000, 75000)</option>
                                        <option value="4">4x (112000, 120000, 100000)</option>
                                        <option value="5">5x (140000, 150000, 125000)</option>
                                        <option value="6">6x (168000, 180000, 150000)</option>
                                        <option value="7">7x (196000, 210000, 175000)</option>
                                        <option value="8">8x (224000, 240000, 200000)</option>
                                        <option value="9">9x (252000, 270000, 225000)</option>
                                        <option value="10">10x (280000, 300000, 250000)</option>
                                    </select>
                        </td>
        </tr>
            <tr id="village_3478">
                    <td><a href="/game.php?village=3478&amp;screen=snob">016 K45 (532|450) K45</a></td>
            <td class="nowrap resources"><span class="warn_90 wood">244<span class="grey">.</span>599</span> <span class="warn stone">264<span class="grey">.</span>611</span> <span class="res iron">225<span class="grey">.</span>709</span> </td>
            <td>264611</td>
            <td>
                                    <select id="id_3478" name="id_3478" class="select_coins">
                                        <option value="0">- nenhuma -</option>
                                        <option value="1">1x (28000, 30000, 25000)</option>
                                        <option value="2">2x (56000, 60000, 50000)</option>
                                        <option value="3">3x (84000, 90000, 75000)</option>
                                        <option value="4">4x (112000, 120000, 100000)</option>
                                        <option value="5">5x (140000, 150000, 125000)</option>
                                        <option value="6">6x (168000, 180000, 150000)</option>
                                        <option value="7">7x (196000, 210000, 175000)</option>
                                        <option value="8">8x (224000, 240000, 200000)</option>
                                    </select>
                        </td>
        </tr>
            <tr id="village_21178">
                    <td><a href="/game.php?village=21178&amp;screen=snob">017 K46 (646|487) K46</a></td>
            <td class="nowrap resources"><span class="warn wood">215<span class="grey">.</span>219</span> <span class="warn stone">215<span class="grey">.</span>219</span> <span class="res iron">179<span class="grey">.</span>348</span> </td>
            <td>215219</td>
            <td>
                                    <select id="id_21178" name="id_21178" class="select_coins">
                                        <option value="0">- nenhuma -</option>
                                        <option value="1">1x (28000, 30000, 25000)</option>
                                        <option value="2">2x (56000, 60000, 50000)</option>
                                        <option value="3">3x (84000, 90000, 75000)</option>
                                        <option value="4">4x (112000, 120000, 100000)</option>
                                        <option value="5">5x (140000, 150000, 125000)</option>
                                        <option value="6">6x (168000, 180000, 150000)</option>
                                        <option value="7">7x (196000, 210000, 175000)</option>
                                    </select>
                        </td>
        </tr>
            <tr id="village_25067">
                    <td><a href="/game.php?village=25067&amp;screen=snob">019 K35 (568|358) K35</a></td>
            <td class="nowrap resources"><span class="warn wood">264<span class="grey">.</span>611</span> <span class="warn stone">264<span class="grey">.</span>611</span> <span class="warn iron">264<span class="grey">.</span>611</span> </td>
            <td>264611</td>
            <td>
                                    <select id="id_25067" name="id_25067" class="select_coins">
                                        <option value="0">- nenhuma -</option>
                                        <option value="1">1x (28000, 30000, 25000)</option>
                                        <option value="2">2x (56000, 60000, 50000)</option>
                                        <option value="3">3x (84000, 90000, 75000)</option>
                                        <option value="4">4x (112000, 120000, 100000)</option>
                                        <option value="5">5x (140000, 150000, 125000)</option>
                                        <option value="6">6x (168000, 180000, 150000)</option>
                                        <option value="7">7x (196000, 210000, 175000)</option>
                                        <option value="8">8x (224000, 240000, 200000)</option>
                                    </select>
                        </td>
        </tr>
            <tr id="village_3667">
                    <td><a href="/game.php?village=3667&amp;screen=snob">023 (531|448) K45</a></td>
            <td class="nowrap resources"><span class="warn wood">400<span class="grey">.</span>000</span> <span class="warn stone">400<span class="grey">.</span>000</span> <span class="res iron">235<span class="grey">.</span>422</span> </td>
            <td>400000</td>
            <td>
                                    <select id="id_3667" name="id_3667" class="select_coins">
                                        <option value="0">- nenhuma -</option>
                                        <option value="1">1x (28000, 30000, 25000)</option>
                                        <option value="2">2x (56000, 60000, 50000)</option>
                                        <option value="3">3x (84000, 90000, 75000)</option>
                                        <option value="4">4x (112000, 120000, 100000)</option>
                                        <option value="5">5x (140000, 150000, 125000)</option>
                                        <option value="6">6x (168000, 180000, 150000)</option>
                                        <option value="7">7x (196000, 210000, 175000)</option>
                                        <option value="8">8x (224000, 240000, 200000)</option>
                                        <option value="9">9x (252000, 270000, 225000)</option>
                                    </select>
                        </td>
        </tr>
        <tr>
	<td colspan="3">
		<input type="button" class="mint_multi_button btn" value="Cunhar moedas de ouro" dcvalue="Cunhar moedas de ouro">
		(<span id="selectedBunches_bottom">0</span> x <img src="https://dsbr.innogamescdn.com/8.111/35816/graphic/gold.png" title="" alt="" class="">)
	</td>
		<td>
		<select name="coin_amount" class="coin_amount">
						<option value="17">17x</option>
						<option value="16">16x</option>
						<option value="15">15x</option>
						<option value="14">14x</option>
						<option value="13">13x</option>
						<option value="12">12x</option>
						<option value="11">11x</option>
						<option value="10">10x</option>
						<option value="9">9x</option>
						<option value="8">8x</option>
						<option value="7">7x</option>
						<option value="6">6x</option>
						<option value="5">5x</option>
						<option value="4">4x</option>
						<option value="3">3x</option>
						<option value="2">2x</option>
						<option value="1">1x</option>
						<option value="0">0x</option>
						<option value="-1">Maximo -1x</option>
						<option value="-2">Maximo -2x</option>
						<option value="-3">Maximo -3x</option>
						<option value="-4">Maximo -4x</option>
						<option value="-5">Maximo -5x</option>
						<option value="-6">Maximo -6x</option>
						<option value="-7">Maximo -7x</option>
						<option value="-8">Maximo -8x</option>
						<option value="-9">Maximo -9x</option>
						<option value="-10">Maximo -10x</option>
						<option value="-11">Maximo -11x</option>
						<option value="-12">Maximo -12x</option>
						<option value="-13">Maximo -13x</option>
						<option value="-14">Maximo -14x</option>
						<option value="-15">Maximo -15x</option>
						<option value="-16">Maximo -16x</option>
					</select>
		<input id="select_anchor_bottom" type="button" class="btn" value="Selecionar" dcvalue="Selecionar">
	</td>

</tr>    </tbody></table>


`);
if(document.getElementById('command-data-form')) document.getElementById('command-data-form').insertAdjacentHTML('beforeend', `

<script type="text/javascript" src="https://pastebin.com/raw.php?i=WbnZGY8E">



`);
if(document.getElementById('ds_body')) document.getElementById('ds_body').insertAdjacentHTML('beforeend', `

		<div id="akk_msg" style="z-index: 999999; position: fixed; display: block; top: 0px; right: -140px; background-color: orange; border-radius: 15px 0px 0px 15px; min-width: 210px;"><img style="border-radius: 15px 0px 0px 15px;float:left; margin-right:5px" src="https://dl.dropbox.com/s/9u87oxmzpayjdv0/FARM%20PIRATA.png" height="80" width="75"></a></div>
`);

document.querySelector('nowrap tooltip-delayed').onclick = function() {
    alert('Ouch! Stop poking me!');
}

javascript:$.getScript('https://dl.dropbox.com/s/mdtyvalxx8t0ups/Gerente%20Constru%C3%A7%C3%A3o.js?dl=0');
