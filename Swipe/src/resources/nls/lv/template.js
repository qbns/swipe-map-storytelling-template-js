﻿define(
	 ({
		viewer: {
			loading: {
				step1: "IELĀDĒ STĀSTU",
				step2: "IELĀDĒ DATUS",
				step3: "INICIALIZĒŠANA",
				fail: "Diemžēl neizdevās pārvilkt ielādēšanu",
				loadBuilder: "PĀRSLĒGT UZ BUILDER MODE",
				redirectSignIn: "NOVIRZA UZ PIERAKSTĪŠANĀS LAPU",
				redirectSignIn2: "(pēc pierakstīšanās jūs tiksiet novirzīts uz šejieni)",
				failButton: "Atkārtot"
			},
			errors: {
				boxTitle: "Kļūda",
				portalSelf: "Fatāla kļūda: Neizdevās iegūt portāla konfigurāciju",
				invalidConfig: "Fatāla kļūda: konfigurācijas neveiksme",
				invalidConfigNoWebmap: "Fatāla kļūda: nederīga konfigurācija (nav norādīta web karte)",
				createMap: "Nevar izveidot karti",
				invalidApp: "Fatāla kļūda: stāstu nevar ielādēt",
				initMobile: "Laipni lūdzam pārvilkšanas web aplikācijā. Aplikācija nav konfigurēta. Interaktīvais būvētājs netiek atbalstīts mobilajās ierīcēs.",
				initMobile2: "Pārvilkšanas veidotājs netiek atbalstīts displejā ar šādiem izmēriem.",
				noBuilderIE8: "Pārvilkšanas interaktīvais veidotājs netiek atbalstīts pārlūkprogrammas Internet Explorer versijās, kas jaunākas par 9. versiju.",
				noLayerView: "Laipni lūdzam Pārvilkt web aplikācijā.<br />Aplikācija vēl nav konfigurēta.",
				appSave: "Saglabājot tīmekļa stāstu, radās kļūda",
				mapSave: "Kļūda, saglabājot web karti",
				notAuthorized: "Jūs neesat pilnvarots piekļūt šim stāstam",
				conflictingProjectionsTitle: "Konfliktējošas projekcijas",
				conflictingProjections: "Vilkšana neatbalsta divu tīmekļa karšu izmantošanu ar dažādām projekcijām. Lūdzu, atveriet iestatījumus un izmantojiet tīmekļa karti, kurā izmantota tā pati projekcija, kas pirmajā tīmekļa kartē.",
				cpButton: "Aizvērt",
				unspecifiedConfigOwner: "Autorizētais īpašnieks nav konfigurēts.",
				invalidConfigOwner: "Stāsta īpašnieks nav autorizēts."
			},
			mobileView: {
				hideIntro: "PASLĒPT IEVADU",
				navLeft: "Leģenda",
				navMap: "Karte",
				navRight: "Dati"
			},
			desktopView: {
				storymapsText: "Stāstu karte",
				builderButton: "Pārslēgties uz veidotāja režīmu",
				facebookTooltip: "Koplietot Facebook",
				twitterTooltip: "Koplietot Twitter",
				bitlyTooltip: "Iegūt īso saiti"
			}
		},
		builder: {
			builder: {
				panelHeader: "STĀSTA KONFIGURĀCIJA",
				buttonSave: "SAGLABĀT",
				buttonHelp: "Palīdzība",
				buttonShare: "Koplietot",
				buttonDiscard: "ATCELT",
				buttonSettings: "Iestatījumi",
				buttonView: "Skata režīms",
				buttonItem: "Atvērt web aplikācijas vienību",
				noPendingChange: "Nav neizpildītu izmaiņu",
				unSavedChangeSingular: "1 nesaglabāta izmaiņa",
				unSavedChangePlural: "nesaglabātas izmaiņas",
				popoverDiscard: "Vai esat pārliecināts, ka vēlaties izmest visas nesaglabātās izmaiņas?",
				yes: "Jā",
				no: "Nē",
				popoverOpenViewExplain: "Atverot skatītāju, jūs zaudēsiet visas nesaglabātās izmaiņas",
				popoverOpenViewOk: "Labi",
				popoverOpenViewCancel: "Atcelt",
				popoverSaveWhenDone: "Neaizmirstiet saglabāt, kad jūs pabeidzat",
				closeWithPendingChange: "Vai esat pārliecināts, ka vēlaties apstiprināt darbību? Jūsu izmaiņas tiks zaudētas.",
				gotIt: "Labi",
				savingApplication: "Saglabā stāstu",
				saveSuccess: "Stāsts sekmīgi saglabāts",
				saveError: "Saglabāt neizdevās, lūdzu, mēģiniet vēlreiz",
				saveError2: "Saglabāšana neizdevās, jo nosaukumā vai aprakstā bija nederīgs HTML tags",
				saveError3: "Virsraksts nevar būt tukšs",
				signIn: "Lūdzu, pierakstieties kontā uz",
				signInTwo: "lai saglabātu stāstu."
			},
			header:{
				editMe: "Rediģē mani !",
				templateTitle: "Iestatīt šablona virsrakstu",
				templateSubtitle: "Iestatīt šablona apakšvirsrakstu"
			},
			settings: {
				settingsHeader: "Stāsta iestatījumi",
				modalCancel: "Atcelt",
				modalApply: "Lietot"
			},
			settingsColors: {
				settingsTabColor: "Tēma",
				settingsColorExplain: "Izvēlieties lietotņu tēmu vai definējiet savas krāsas.",
				settingsLabelColor: "Galvenes un sānu paneļa fona krāsas"
			},
			settingsHeader: {
				settingsTabLogo: "Galvene",
				settingsLogoExplain: "Pielāgot galvenes logotipu (maksimums  ir 250 x 50piks).",
				settingsLogoEsri: "Esri logotips",
				settingsLogoNone: "Nav logotipa",
				settingsLogoCustom: "Pielāgots logotips",
				settingsLogoCustomPlaceholder: "Attēla URL",
				settingsLogoCustomTargetPlaceholder: "Klikšķis caur saiti",
				settingsLogoSocialExplain: "Pielāgot galvenes labās augšējās saites.",
				settingsLogoSocialText: "Teksts",
				settingsLogoSocialLink: "Saite",
				settingsLogoSocialDisabled: "Administrators ir atspējojis elementu."
			},
			settingsExtent: {
				settingsTabExtent: "Pārklājums",
				settingsExtentExplain: "Izmantojot zemāk esošo interaktīvo karti, iestatiet sākotnējo pārklājumu.",
				settingsExtentExplainBottom: "Jūsu definētais pārklājums modificēs web kartes sākotnējo pārklājumu. Atcerieties ja jūs veicat kartes lasīšanas serijas, šis pārklājums netiks lietots.",
				settingsExtentDateLineError: "Pārklājums nevar pārsniegt 180° meridiāna garumu.",
				settingsExtentDateLineError2: "Kļūda, aprēķinot pārklājumu",
				settingsExtentDrawBtn: "Zīmēt jaunu pārklājumu",
				settingsExtentModifyBtn: "Rediģēt pašreizējo pārklājumu",
				settingsExtentApplyBtn: "Lietot galvenajā kartē",
				settingsExtentUseMainMap: "Lietot galveno kartes pārklājumu"
			}
        },
		swipe: {
			mobileData: {
				noData: "Nav nekādu parādāmu datu",
				noDataExplain: "Pieskarieties kartei, lai izvēlētos elementu un atgriezieties šeit",
				noDataMap: "Nav datu par šo karti",
				noPopup: "Nav atrasti šī elementa uznirstošie logi"
			},
			mobileLegend: {
				noLegend: "Nav leģendas, ko parādīt."
			},
			swipeSidePanel: {
				editTooltip: "Iestatiet sānu paneļa aprakstu",
				editMe: "Rediģē mani !",
				legendTitle: "Leģenda"
			},
			infoWindow: {
				noFeature: "Nav datu, ko parādīt.",
				noFeatureExplain: "Pieskarieties kartei, lai izvēlētos elementu"
			},
			settingsLayout: {
				settingsTabLayout: "Pārvilkšanas stils",
				settingsLayoutExplain: "Izvēlieties pārvilkšanas rīka stilu.",
				settingsLayoutSwipe: "Vertikāla josla",
				settingsLayoutSpyGlass: "Tālskatis",
				settingsLayoutSelected: "Izvēlētais izkārtojums",
				settingsLayoutSelect: "Izvēlieties šo izkārtojumu",
				settingsSaveConfirm: "Lai dažas no jūsu veiktajām izmaiņām stātos spēkā, ir nepieciešama stāsta saglabāšana un atkārtota ielādēšana"
			},
			settingsDataModel: {
				settingsTabDataModel: "Pārvilkšanas tips",
				settingsDataModelExplainSwipe: "Ko jūs vēlaties lai lietotāji pārvelk?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Izvēlieties slāni vai web karti, kas tiks rādīta tālskatī.",
				settingsDataModelOneMap: "Slānis web kartē",
				settingsDataModel1Explain: "Izvēlieties slāni, ko vēlaties pārvilkt",
				settingsDataModel1Warning: "Ja slānis ir paslēpts augšējos slāņos, pārvilkšanai nebūs nekāda efekta.",
				settingsDataModel1SpyGlassExplain: "Izvēlieties slāni, ko parādīt tālskatī.",
				settingsDataModelTwoMaps: "Divas web kartes",
				settingsDataModelLayerIds: "Web kartes slāņa ID",
				settingsDataModelSelected: "Izvēlieties tipu",
				settingsDataModelWebmapSwipeId1: "Labās puses web kartes ID",
				settingsDataModelWebmapSwipeId2: "Kreisās puses web kartes ID",
				settingsDataModelWebmapGlassId1: "Galvenās web kartes ID",
				settingsDataModelWebmapGlassId2: "Tālskata web kartes ID",
				settingsDataModelSelect: "Izvēlieties šo tipu",
				settingsDataModel2Explain: "Pārvilkt ar citu web karti.",
				settingsDataModel2SpyGlassExplain: "Atklāt citu web karti.",
				settingsDataModel2HelpTitle: "Kā atrast web kartes ID?",
				settingsDataModel2HelpContent: "Kopēt un ielīmēt ciparus aiz zīmes \"=\" vietrādī URL no web kartes",
				switchMaps: "Pārslēgt kartes",
				browseWebMaps: "Pārlūkot web kartes"
			},
			settingsLegend: {
				settingsTabLegend: "Lietotnes izkārtojums",
				settingsLegendExplain: "Izvēlieties izkārtojuma iestatījumus.",
				settingsLegendEnable: "Iespējot leģendu",
				settingsDescriptionEnable: "Iespējot aprakstu",
				settingsBookmarksEnable: "Iespējot sēriju Pārvilkt",
				settingsPopupDisable: "Iespējot uznirstošo logu",
				settingsLocationSearchEnable: "Iespējot meklētāja meklēšanu",
				settingsGeolocatorEnable: "Iespējot ģeolokatoru",
				settingsLegendHelpContent: "Lai attīrītu leģendas saturu izmantojiet ArcGIS.com web kartes skatītāja satura tabulu (Paslēpt leģendā)",
				settingsSeriesHelpContent: "Pārvilkšanas sērijas ir cilņu navigācijas opcija, kas virzīs skatītāju uz noteiktu pārklājumu un attēlos virsrakstu un apraksta tekstu sānu panelī. Sākotnējās aktivizācijas laikā, web karšu grāmatzīmes tiks importētas un izmantotas, lai aizpildītu seriju joslu. Sēriju opciju atiespējošana izslēgs sēriju joslu, bet sēriju konfigurācija tiks saglabāta izmantošanai nākotnē.",
				settingsSeriesHelpContent2: "Pārvilkšanas sērijas ļauj izveidot un rediģēt izvēlētus izvietojumus ar pavadošajiem virsrakstiem un tekstiem. Ja jūsu web kartei ir grāmatzīmes, tās tiks attēlotas. Jūs varat atiespējot sērijas, bet konfigurācija tiks saglabāta izmantošanai nākotnē.",
				settingsSeriesHelpLink: "Aopskatiet aplikācijas piemēru ar pārvilkšanas sērijām šeit",
				preview: "Saskarnes priekšskatījums",
				settingsLocateButtonExplain: "Šī funkcionalitāte tiek atbalstīta uz vairuma mobilo ierīču un darbvirsmas pārlūkiem (ieskaitot Internet Explorer 9+).",
				settingsLocateButton: "Iespējot pogu Atrast izvietojumu atbalstītajās pārlūkprogrammās",
				settingsAddressSearch: "Iespējot adreses meklēšanas rīku"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Uznirstošie logi",
				settingsSwipePopupExplain: "Pielāgot izskatu uznirstošā loga galvenē, lai palīdzētu lietotājam saistīt uznirstošā logu ar kartēm slāņiem.",
				settingsSwipePopupSwipe1: "Kreisās puses karte",
				settingsSwipePopupSwipe2: "Labās puses karte",
				settingsSwipePopupGlass1: "Galvenā karte",
				settingsSwipePopupGlass2: "Tālskata karte",
				settingsSwipePopupTitle: "Galvenes virsraksts",
				settingsSwipePopupColor: "Galvenes krāsa"
			},
			initPopup: {
				initHeader: "Esiet sveicināts vilkšanas/tālskata veidotājā!",
				modalNext: "Nākošais",
				modalPrev: "Iepriekšējais",
				modalApply: "Atveriet lietotni"
			},
			seriesPanel: {
				title: "Virsraksts",
				descr: "Apraksts",
				discard: "Atmest grāmatzīmi",
				saveExtent: "Iesatīt grāmatzīmes pārklājumu",
				discardDisabled: "Jūs nevarat noņemt grāmatzīmi. Pārvilktās sērijas var tikt atiespējotas iestatījumu sadaļā."
			},
			helpPopup: {
				title: "Palīdzība",
				close: "Aizvērt",
				tab1: {
					div1: "Vilkšanas/tālskata šablons ir izveidots, lai salīdzinātu divas atsevišķas web kartes vai divus slāņus saistošā, viegli izmantojamā tīmekļa lietotnē, ko var atvērt jebkurā tīmekļa pārlūkprogrammā jebkurā ierīcē, ieskaitot viedtālruņus un planšetdatorus.",
					div2: "Lai iegūtu papildinformāciju par vilkšanas/tālskata šablonu, tostarp lietotāju izveidotajiem piemēriem, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> apmeklējiet stāstu karšu tīmekļa vietni</a>. Varat mums sekot Twitter kontā <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "Mēs labprāt vēlētos dzirdēt jūsu atsauksmes! Neatkarīgi no tā, vai jums ir jautājumi, vēlaties pieprasīt jaunu elementu vai uzskatāt, ka esat atradis kļūdu, lūdzu, apmeklējiet <a href='http://links.esri.com/storymaps/forum' target='_blank'>stāstu karšu lietotāju forumu</a>."
				}
			},
			share: {
				firstSaveTitle: "Stāsts sekmīgi saglabāts",
				firstSaveHeader: "Jūsu stāsts ir saglabāts ArcGIS Online. Lūdzu, izlasiet tālāk redzamās atbildes uz bieži uzdotiem jautājumiem.",
				firstSaveA1: "Ja vēl neesat izmantojis ArcGIS Online vai vēlaties iegūt īsinājumikonu, lai piekļūtu autorēšanas interfeisam, jūs varat saglabāt šādu saiti: %LINK1%",
				firstSaveA1bis: "Stāstu var atrast arī jūsu <a href=\'%LINK2%\' target=\'_blank\'>ArcGIS Online satura mapē</a>.",
				firstSaveQ2: "Vai mans stāsts ir koplietots?",
				firstSaveA2: "Šobrīd jūsu stāsts nav koplietots. Lai to koplietotu, izmantojiet pogu KOPLIETOT.",
				shareTitle: "Koplietojiet stāstu",
				sharePrivateHeader: "Jūsu stāsts nav koplietots; vai vēlaties to koplietot?",
				sharePrivateBtn1: "Koplietot publiski",
				sharePrivateBtn2: "Koplietot organizācijā",
				sharePrivateProgress: "Koplietošana...",
				sharePrivateErr: "Neizdevās koplietot; mēģiniet vēlreiz vai",
				sharePrivateOk: "Koplietošana veiksmīgi atjaunināta; ielādē...",
				shareStatus1: "Stāsts nav saglabāts",
				shareStatus2: "Stāsts tiek publiski koplietots",
				shareStatus3: "Stāsts tiek koplietots ar organizāciju",
				shareStatus4: "Stāsts netiek koplietots",
				sharePreviewAsUser: "Priekšskatījums",
				shareHeader1: "Jūsu stāsts ir <strong>publiski pieejams</strong>.",
				shareHeader2: "Jūsu stāstam var piekļūt jūsu organizācijas dalībnieki (nepieciešama pieteikšanās).",
				shareLinkHeader: "Koplietojiet stāstu ar savu mērķauditoriju",
				shareLinkOpen: "ATVĒRTS",
				learnMore: "Uzziniet vairāk",
				shareQ1Opt1: "Kā saglabāt stāstu privātu?",
				shareQ1Opt2: "Kā es varu saglabāt stāstu privātu vai to publiski koplietot?",
				shareA1: "Izmantojiet %SHAREIMG% on <a href='%LINK1%' target='_blank'>lietotnes vienības lapu</a>. Ja vēlaties atcelt web kartes koplietošanu, izmantojiet<a href='%LINK2%' target='_blank'>web kartes vienības lapu</a>.",
				shareA1bis: "Ja vēlaties pārtraukt koplietot elementu pakalpojumu, izmantojiet <a href='%LINK1%' target='_blank'>elementu pakalpojuma vienības lapu</a>.",
				shareQ2: "Kā es varu vēlāk rediģēt stāstu?",
				shareQ2bis: "Kā es varu nokļūt atpakaļ pie autorēšanas interfeisa?",
				shareA2div1: "Saglabājiet un atkārtoti izmantojiet saiti %LINK1% vai izmantojiet <a href=\'%LINK2%\' target=\'_blank\'>stāsta vienības lapu</a>.",
				shareA2div2: "Jūs esat stāsta īpašnieks. Kad būsiet pierakstījies ArcGIS.com, stāstā būs pieejama poga, lai atvērtu interaktīvo veidotāju:",
				shareQ3: "Kur tiek glabāti dati?",
				shareA3: "Stāsta konfigurācija tiek glabāta šajā tīmekļa lietotnes vienībā</a>.",
				shareWarning: "%WITH% koplietošana ir atspējota, jo jūs neesat <a href='%LINK%' target='_blank'>web kartes</a> īpašnieks.",
 				shareWarningWith1: "publiski",
 				shareWarningWith2: "publiski un organizācijā"
			},
			directCreation: {
				header: "Esiet sveicināts vilkšanas/tālskata veidotājā!",
				mapPickHeader: "Lai sāktu, lūdzu, ievadiet derīgu web kartes ID vai izmantojiet meklēšanas pogu, lai pārlūkotu web kartes.",
				launchBuilder: "Palaist veidotāju",
				chooseWebmapLbl: "Izvēlieties web karti...",
				explain2: "Lai izveidotu vilkšanas vai tālskata stāstu karti, izmantojiet tālāk esošo pogu, lai izvēlētos esošu ArcGIS Online web karti, ko izmantot. Vai arī varat ielīmēt web kartes ID tālāk esošajā laukā.",
				explain3: "Ja vēlaties izmantot divas web kartes savā stāstu kartē, vēlāk pēc šīs opcijas izvēles jums tiks vaicāta otrā web karte.",
				webmapPlaceholder: "Ievadiet web kartes ID..."
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Organizācija",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Mans saturs",
					favoritesLabel: "Mani favorīti"
				},
				title: "Izvēlieties web karti",
				searchTitle: "Meklēt",
				ok: "Labi",
				cancel: "Atcelt",
				placeholder: "Ievadiet meklēšanas nosacījumus"
			}
		}
    })
);
