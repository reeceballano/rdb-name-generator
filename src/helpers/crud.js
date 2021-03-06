import { reactive, toRefs } from 'vue';

export default function() {
	let state = reactive({
		names: [],
		isLoading: false,
		isAnimated: true,
	});

	function readApi(url) {
		state.isLoading = true;

		return fetch(url)
					.then(response => response.json())
					.then(data => {
						state.names = data;
						setTimeout(() => {
							state.isLoading = false;
						}, 2000);
						state.isAnimated = false;
					});
	}

	function generateEmail(name) {

		const domains = ["unmte.co", "nucmi.dev", "debou.ca", "frako.com", "irwwi.co", "polho.net", "ereja.net", "telba.co", "mucqo.net", "yahoo.com", "gmail.com", "hotmail.net","webmagnat.ro"
			,"nickelfreesolutions.com"
			,"scheepvaarttelefoongids.nl"
			,"tursan.net"
			,"plannersanonymous.com"
			,"doing.fr"
			,"saltstack.com"
			,"deconsquad.com"
			,"migom.com"
			,"tjprc.org"
			,"worklife.dk"
			,"inno-make.com"
			,"food-hub.org"
			,"bikemastertool.com"
			,"betenbewegen.de"
			,"vk.me"
			,"twotigersports.com"
			,"517mrt.com"
			,"siel.nl"
			,"e-hps.com"
			,"infowheel.com"
			,"synirc.net"
			,"abuliyan.com"
			,"easy-ways.com"
			,"stark.dk"
			,"funwirks.com"
			,"eurocqs.net"
			,"202yx.com"
			,"nikko-sake.com"
			,"xnet.lv"
			,"visionpharma.com"
			,"trade-india.com"
			,"t-bird.edu"
			,"siebel-crm.net"
			,"adriaticapress.it"
			,"41789.com"
			,"autofirenze.biz"
			,"minniowa.com"
			,"sweetteaproper.com"
			,"recruit-dc.co.jp"
			,"competitivecameras.com"
			,"zoncinta.com"
			,"vadim-prostakov.ru"
			,"vk.me"
			,"securitasweb.it"
			,"mandarinclass.my"
			,"pbxi.net"
			,"zyznowski.pl"
			,"meodia.com"
			,"niceinternetmoney.ru"
			,"guardiancaps.com"
			,"bbccable.net"
			,"ams-luenen.de"
			,"ihalehaberbulteni.com"
			,"salvia-community.net"
			,"superpowerfruits.com"
			,"bereyellingergl.com"
			,"downloadfreetvseries.com"
			,"iqshop.ro"
			,"urbancliq.com"
			,"rocket-media.net"
			,"uskudarhaliyikama.org"
			,"ftbp.ro"
			,"savedeo.com"
			,"nanabit.net"
			,"memewood.com"
			,"divorcereform.us"
			,"solarincomefund.com"
			,"novofri.com"
			,"8852088.com"
			,"admil.ru"
			,"rafonline.org"
			,"bois-francs.com"
			,"pieceinch.com"
			,"tel.com"
			,"teenpregnancysc.org"
			,"wisdomforhealth.net"
			,"powgnar.com"
			,"screenmediamag.com"
			,"pricerabbit.com"
			,"archive-host.fr"
			,"hotimpit.ru"
			,"detskie-krovatki.by"
			,"3sitracking.com"
			,"hellfiremods.co.uk"
			,"eslyoga.com"
			,"buyphen375cheap.com"
			,"kilgour.com"
			,"vk.me"
			,"hualienhouse.com"
			,"tour-box.ru"
			,"servizioallerta.it"
			,"denyojp.com"
			,"2912muranoway.info"
			,"centralepiecesauto.com"
			,"bluedynamics.com"
			,"xjs123.com"
			,"veryicon.com"
			,"emrekoldas.com"
			,"adc-inspect.com"
			,"vusadbe.by"
			,"morban.co.uk"
			,"hainanair.us"
			,"vk.me"];

		
		const rand = Math.floor(Math.random() * domains.length);

		return `${ name }@${ domains[rand] }`;

	}	

	return {
		...toRefs(state),
		readApi,
		generateEmail,
	}
}