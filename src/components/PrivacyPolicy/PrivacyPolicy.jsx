import React, { useRef } from 'react';
import styled from 'styled-components';
import { PrivacyPolicyHeading as Heading } from '../../StyledComponents/Heading';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
	const innerRef = useRef(null);

	const CustomLink = styled.a.attrs(props => ({
		target: '_blank',
		href: props.src
	}))`
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		display: inline-block;
		width: 100%;
	`;

	const Wrapper = styled.div`
		padding: 1em .5em;
		font-size: .9em;
		text-align: justify;

		@media only screen and (min-width: 768px) {
			padding: 2em 3em;
		}

		@media only screen and (min-width: 1200px) {
			padding: 4em 6em;
		}
	`;

	return (
		<Wrapper ref={innerRef}>
			<Link to="/">Go back</Link>
			<Heading as="h1">Datenschutzerklärung</Heading>
			<Heading as="h2">Datenschutz</Heading>
			<p>Wir haben diese Datenschutzerklärung (Fassung 16.11.2019-311128595) verfasst, um Ihnen gemäß der Vorgaben der Datenschutz-Grundverordnung (EU) 2016/679 zu erklären, welche Informationen wir sammeln, wie wir Daten verwenden und welche Entscheidungsmöglichkeiten Sie als Besucher dieser Webseite haben.</p>
			<p>Leider liegt es in der Natur der Sache, dass diese Erklärungen sehr technisch klingen, wir haben uns bei der Erstellung jedoch bemüht die wichtigsten Dinge so einfach und klar wie möglich zu beschreiben.</p>
			<Heading as="h2">Automatische Datenspeicherung</Heading>
			<p>Wenn Sie heutzutage Webseiten besuchen, werden gewisse Informationen automatisch erstellt und gespeichert, so auch auf dieser Webseite.</p>
			<p>Wenn Sie unsere Webseite so wie jetzt gerade besuchen, speichert unser Webserver (Computer auf dem diese Webseite gespeichert ist) automatisch Daten wie</p>
			<ul>
				<li>die Adresse (URL) der aufgerufenen Webseite</li>
				<li>Browser und Browserversion</li>
				<li>das verwendete Betriebssystem</li>
				<li>die Adresse (URL) der zuvor besuchten Seite (Referrer URL)</li>
				<li>den Hostname und die IP-Adresse des Geräts von welchem aus zugegriffen wird</li>
				<li>Datum und Uhrzeit</li>
			</ul>
			<p>in Dateien (Webserver-Logfiles).</p>
			<p>In der Regel werden Webserver-Logfiles zwei Wochen gespeichert und danach automatisch gelöscht. Wir geben diese Daten nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim Vorliegen von rechtswidrigem Verhalten eingesehen werden.
			Die Rechtsgrundlage besteht nach Artikel 6  Absatz 1 f DSGVO (Rechtmäßigkeit der Verarbeitung) darin, dass berechtigtes Interesse daran besteht, den fehlerfreien Betrieb dieser Webseite durch das Erfassen von Webserver-Logfiles zu ermöglichen.</p>
			<Heading as="h2">Cookies</Heading>
			<p>Unsere Website verwendet HTTP-Cookies um nutzerspezifische Daten zu speichern.
			Im Folgenden erklären wir, was Cookies sind und warum Sie genutzt werden, damit Sie die folgende Datenschutzerklärung besser verstehen.</p>

			<Heading as="h3">Was genau sind Cookies?</Heading>
			<p>Immer wenn Sie durch das Internet surfen, verwenden Sie einen Browser. Bekannte Browser sind beispielsweise Chrome, Safari, Firefox und Microsoft Edge. Die meisten Webseiten speichern kleine Text-Dateien in Ihrem Browser. Diese Dateien nennt man Cookies.</p>
			<p>Eines ist nicht von der Hand zu weisen: Cookies sind echt nützliche Helferlein. Fast alle Webseiten verwenden Cookies. Genauer gesprochen sind es HTTP-Cookies, da es auch noch anderer Cookies für andere Anwendungsbereiche gibt. HTTP-Cookies sind kleine Dateien, die von unserer Website auf Ihrem Computer gespeichert werden. Diese Cookie-Dateien werden automatisch im Cookie-Ordner, quasi dem “Hirn” Ihres Browsers, untergebracht. Ein Cookie besteht aus einem Namen und einem Wert. Bei der Definition eines Cookies müssen zusätzlich ein oder mehrere Attribute angegeben werden.</p>
			<p>Cookies speichern gewisse Nutzerdaten von Ihnen, wie beispielsweise Sprache oder persönliche Seiteneinstellungen. Wenn Sie unsere Seite wieder aufrufen, übermittelt Ihr Browser die „userbezogenen“ Informationen an unsere Seite zurück. Dank der Cookies weiß unsere Website, wer Sie sind und bietet Ihnen Ihre gewohnte Standardeinstellung. In einigen Browsern hat jedes Cookie eine eigene Datei, in anderen wie beispielsweise Firefox sind alle Cookies in einer einzigen Datei gespeichert.</p>
			<p>Es gibt sowohl Erstanbieter Cookies als auch Drittanbieter-Cookies. Erstanbieter-Cookies werden direkt von unserer Seite erstellt, Drittanbieter-Cookies werden von Partner-Webseiten (z.B. Google Analytics) erstellt. Jedes Cookie ist individuell zu bewerten, da jedes Cookie andere Daten speichert. Auch die Ablaufzeit eines Cookies variiert von ein paar Minuten bis hin zu ein paar Jahren. Cookies sind keine Software-Programme und enthalten keine Viren, Trojaner oder andere „Schädlinge“. Cookies können auch nicht auf Informationen Ihres PCs zugreifen.</p>

			<p>So können zum Beispiel Cookie-Daten aussehen:</p>
			<ul>
				<li>Name: _ga</li>
				<li>Ablaufzeit: 2 Jahre</li>
				<li>Verwendung: Unterscheidung der Webseitenbesucher</li>
				<li>Beispielhafter Wert: GA1.2.1326744211.152311123798</li>
			</ul>
			<p>Ein Browser sollte folgende Mindestgrößen unterstützen:</p>
			<ul>
				<li>Ein Cookie soll mindestens 4096 Bytes enthalten können</li>
				<li>Pro Domain sollen mindestens 50 Cookies gespeichert werden können</li>
				<li>Insgesamt sollen mindestens 3000 Cookies gespeichert werden können</li>
			</ul>
			<Heading as="h3">Welche Arten von Cookies gibt es?</Heading>
			<p>Die Frage welche Cookies wir im Speziellen verwenden, hängt von den verwendeten Diensten ab und wird in der folgenden Abschnitten der Datenschutzerklärung geklärt. An dieser Stelle möchten wir kurz auf die verschiedenen Arten von HTTP-Cookies eingehen.</p>
			<p>Man kann 4 Arten von Cookies unterscheiden:</p>
			<Heading as="h4">Unbedingt notwendige Cookies</Heading>
			<p>Diese Cookies sind nötig, um grundlegende Funktionen der Website sicherzustellen. Zum Beispiel braucht es diese Cookies, wenn ein User ein Produkt in den Warenkorb legt, dann auf anderen Seiten weitersurft und später erst zur Kasse geht. Durch diese Cookies wird der Warenkorb nicht gelöscht, selbst wenn der User sein Browserfenster schließt.</p>
			<Heading as="h4">Funktionelle Cookies</Heading>
			<p>Diese Cookies sammeln Infos über das Userverhalten und ob der User etwaige Fehlermeldungen bekommt. Zudem werden mithilfe dieser Cookies auch die Ladezeit und das Verhalten der Website bei verschiedenen Browsern gemessen.</p>
			<Heading as="h4">Zielorientierte Cookies</Heading>
			<p>Diese Cookies sorgen für eine bessere Nutzerfreundlichkeit. Beispielsweise werden eingegebene Standorte, Schriftgrößen oder Formulardaten gespeichert.</p>
			<Heading as="h4">Werbe-Cookies</Heading>
			<p>Diese Cookies werden auch Targeting-Cookies genannt. Sie dienen dazu dem User individuell angepasste Werbung zu liefern. Das kann sehr praktisch, aber auch sehr nervig sein.</p>
			<p>Üblicherweise werden Sie beim erstmaligen Besuch einer Webseite gefragt, welche dieser Cookiearten Sie zulassen möchten. Und natürlich wird diese Entscheidung auch in einem Cookie gespeichert.</p>
			<Heading as="h3">Wie kann ich Cookies löschen?</Heading>
			<p>Wie und ob Sie Cookies verwenden wollen, entscheiden Sie selbst. Unabhängig von welchem Service oder welcher Website die Cookies stammen, haben Sie immer die Möglichkeit Cookies zu löschen, nur teilweise zuzulassen oder zu deaktivieren. Zum Beispiel können Sie Cookies von Drittanbietern blockieren, aber alle anderen Cookies zulassen.</p>
			<p>Wenn Sie feststellen möchten, welche Cookies in Ihrem Browser gespeichert wurden, wenn Sie Cookie-Einstellungen ändern oder löschen wollen, können Sie dies in Ihren Browser-Einstellungen finden:</p>
			<p><CustomLink src="https://support.google.com/chrome/answer/95647?tid=311125157">Chrome: Cookies in Chrome löschen, aktivieren und verwalten</CustomLink></p>
			<p><CustomLink src="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=311125157">Safari: Verwalten von Cookies und Websitedaten mit Safari</CustomLink></p>
			<p><CustomLink src="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=311125157">Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem Computer abgelegt haben</CustomLink></p>
			<p><CustomLink src="https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=311125157">Microsoft Edge: Löschen und Verwalten von Cookies</CustomLink></p>
			<p>Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren Browser so einrichten, dass er Sie immer informiert, wenn ein Cookie gesetzt werden soll. So können Sie bei jedem einzelnen Cookie entscheiden, ob Sie das Cookie erlauben oder nicht. Die Vorgangsweise ist je nach Browser verschieden. Am besten ist es Sie suchen die Anleitung in Google mit dem Suchbegriff “Cookies löschen Chrome” oder “Cookies deaktivieren Chrome” im Falle eines Chrome Browsers oder tauschen das Wort “Chrome” gegen den Namen Ihres Browsers, z.B. Edge, Firefox, Safari aus.</p>
			<Heading as="h3">Wie sieht es mit meinem Datenschutz aus?</Heading>
			<p>Seit 2009 gibt es die sogenannten „Cookie-Richtlinien“. Darin ist festgehalten, dass das Speichern von Cookies eine Einwilligung des Website-Besuchers (also von Ihnen) verlangt. Innerhalb der EU-Länder gibt es allerdings noch sehr unterschiedliche Reaktionen auf diese Richtlinien. In Deutschland wurden die Cookie-Richtlinien nicht als nationales Recht umgesetzt. Stattdessen erfolgte die Umsetzung dieser Richtlinie weitgehend in § 15 Abs.3 des Telemediengesetzes (TMG).</p>
			<p>Wenn Sie mehr über Cookies wissen möchten und vor technischen Dokumentationen nicht zurückscheuen, empfehlen wir <CustomLink src="https://tools.ietf.org/html/rfc6265">den Request for Comments der Internet Engineering Task Force (IETF) namens “HTTP State Management Mechanism”</CustomLink>.</p>
			<Heading as="h2">Speicherung persönlicher Daten</Heading>
			<p>Persönliche Daten, die Sie uns auf dieser Website elektronisch übermitteln, wie zum Beispiel Name, E-Mail-Adresse, Adresse oder andere persönlichen Angaben im Rahmen der Übermittlung eines Formulars oder Kommentaren im Blog, werden von uns gemeinsam mit dem Zeitpunkt und der IP-Adresse nur zum jeweils angegebenen Zweck verwendet, sicher verwahrt und nicht an Dritte weitergegeben.</p>
			<p>Wir nutzen Ihre persönlichen Daten somit nur für die Kommunikation mit jenen Besuchern, die Kontakt ausdrücklich wünschen und für die Abwicklung der auf dieser Webseite angebotenen Dienstleistungen und Produkte. Wir geben Ihre persönlichen Daten ohne Zustimmung nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim Vorliegen von rechtswidrigem Verhalten eingesehen werden.</p>
			<p>Wenn Sie uns persönliche Daten per E-Mail schicken – somit abseits dieser Webseite – können wir keine sichere Übertragung und den Schutz Ihrer Daten garantieren. Wir empfehlen Ihnen, vertrauliche Daten niemals unverschlüsselt per E-Mail zu übermitteln.</p>
			<p>Die Rechtsgrundlage besteht nach Artikel 6  Absatz 1 a DSGVO (Rechtmäßigkeit der Verarbeitung) darin, dass Sie uns die Einwilligung zur Verarbeitung der von Ihnen eingegebenen Daten geben. Sie können diesen Einwilligung jederzeit widerrufen – eine formlose E-Mail reicht aus, Sie finden unsere Kontaktdaten im Impressum.</p>
			<Heading as="h2">Rechte laut Datenschutzgrundverordnung</Heading>
			<p>Ihnen stehen laut den Bestimmungen der DSGVO grundsätzlich die folgende Rechte zu:</p>
			<ul>
				<li>Recht auf Berichtigung (Artikel 16 DSGVO)</li>
				<li>Recht auf Löschung („Recht auf Vergessenwerden“) (Artikel 17 DSGVO)</li>
				<li>Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)</li>
				<li>Recht auf Benachrichtigung – Mitteilungspflicht im Zusammenhang mit der Berichtigung oder Löschung personenbezogener Daten oder der Einschränkung der Verarbeitung (Artikel 19 DSGVO)</li>
				<li>Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)</li>
				<li>Widerspruchsrecht (Artikel 21 DSGVO)</li>
				<li>Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung — einschließlich Profiling — beruhenden Entscheidung unterworfen zu werden (Artikel 22 DSGVO)</li>
			</ul>
			<p>Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich an die Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI) wenden.</p>
			<Heading as="h2">Auswertung des Besucherverhaltens</Heading>
			<p>In der folgenden Datenschutzerklärung informieren wir Sie darüber, ob und wie wir Daten Ihres Besuchs dieser Website auswerten. Die Auswertung der gesammelten Daten erfolgt in der Regel anonym und wir können von Ihrem Verhalten auf dieser Website nicht auf Ihre Person schließen.</p>
			<p>Mehr über Möglichkeiten dieser Auswertung der Besuchsdaten zu widersprechen erfahren Sie in der folgenden Datenschutzerklärung.</p>
			<Heading as="h2">TLS-Verschlüsselung mit https</Heading>
			<p>Wir verwenden https um Daten abhörsicher im Internet zu übertragen (Datenschutz durch Technikgestaltung <CustomLink src="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE&tid=311128589">Artikel 25 Absatz 1 DSGVO</CustomLink>). Durch den Einsatz von TLS (Transport Layer Security), einem Verschlüsselungsprotokoll zur sicheren Datenübertragung im Internet können wir den Schutz vertraulicher Daten sicherstellen. Sie erkennen die Benutzung dieser Absicherung der Datenübertragung am kleinen Schloßsymbol links oben im Browser und der Verwendung des Schemas https (anstatt http) als Teil unserer Internetadresse.</p>
			<Heading as="h2">Google Fonts Datenschutzerklärung</Heading>
			<p>Wir verwenden Google Fonts der Firma Google Inc. (1600 Amphitheatre Parkway Mountain View, CA 94043, USA) auf unserer Webseite.</p>
			<p>Für die Verwendung von Google-Schriftarten müssen Sie sich nicht anmelden bzw. ein Passwort hinterlegen. Weiters werden auch keine Cookies in Ihrem Browser gespeichert. Die Dateien (CSS, Schriftarten/Fonts) werden über die Google-Domains fonts.googleapis.com und fonts.gstatic.com angefordert. Laut Google sind die Anfragen nach CSS und Schriften vollkommen getrennt von allen anderen Google-Diensten. Wenn Sie ein Google-Konto haben, brauchen Sie keine Sorge haben, dass Ihre Google-Kontodaten, während der Verwendung von Google Fonts, an Google übermittelt werden. Google erfasst die Nutzung von CSS (Cascading Style Sheets) und der verwendeten Schriftarten und speichert diese Daten sicher. Wie die Datenspeicherung genau aussieht, werden wir uns noch im Detail ansehen.</p>
			<Heading as="h3">Was sind Google Fonts?</Heading>
			<p>Google Fonts (früher Google Web Fonts) ist ein interaktives Verzeichnis mit mehr als 800 Schriftarten, die die Google LLC zur freien Verwendung bereitstellt.</p>
			<p>Viele dieser Schriftarten sind unter der SIL Open Font License veröffentlicht, während andere unter der Apache-Lizenz veröffentlicht wurden. Beides sind freie Software-Lizenzen. Somit können wir sie frei verwenden, ohne dafür Lizenzgebühren zu zahlen.</p>
			<Heading as="h3">Warum verwenden wir Google Fonts auf unserer Webseite?</Heading>
			<p>Mit Google Fonts können wir auf der eigenen Webseite Schriften nutzen, und müssen sie nicht auf unserem eigenen Server hochladen. Google Fonts ist ein wichtiger Baustein, um die Qualität unserer Webseite hoch zu halten. Alle Google-Schriften sind automatisch für das Web optimiert und dies spart Datenvolumen und ist speziell für die Verwendung bei mobilen Endgeräten ein großer Vorteil. Wenn Sie unsere Seite besuchen, sorgt die niedrige Dateigröße für eine schnelle Ladezeit. Des Weiteren sind Google Fonts sogenannte sichere Web Fonts. Unterschiedliche Bildsynthese-Systeme (Rendering) in verschiedenen Browsern, Betriebssystemen und mobilen Endgeräten können zu Fehlern führen. Solche Fehler können teilweise Texte bzw. ganze Webseiten optisch verzerren. Dank des schnellen Content Delivery Network (CDN) gibt es mit Google Fonts keine plattformübergreifenden Probleme. Google Fonts unterstützt alle gängigen Browser ( Google Chrome, Mozilla Firefox, Apple Safari, Opera)  und funktioniert zuverlässig auf den meisten modernen mobilen Betriebssystemen, einschließlich Android 2.2+ und iOS 4.2+ (iPhone, iPad, iPod).</p>
			<p>Wir verwenden die Google Fonts also, damit wir unser gesamtes Online-Service so schön und einheitlich wie möglich darstellen können. Nach dem Art. 6 Abs. 1 f lit. F DSGVO stellt das bereits ein „berechtigtes Interesse“ an der Verarbeitung von personenbezogenen Daten dar. Unter „berechtigtem Interesse“ versteht man in diesem Fall sowohl rechtliche als auch wirtschaftliche oder ideelle Interessen, die vom Rechtssystem anerkannt werden.</p>
			<Heading as="h3">Welche Daten werden von Google gespeichert?</Heading>
			<p>Wenn Sie unsere Webseite besuchen, werden die Schriften über einen Google-Server nachgeladen. Durch diesen externen Aufruf werden Daten an die Google-Server übermittelt. So erkennt Google auch, dass Sie bzw. Ihre IP-Adresse unsere Webseite besucht. Die Google Fonts API wurde entwickelt, um die Erfassung, Speicherung und Verwendung von Endnutzerdaten auf das zu reduzieren, was für eine effiziente Bereitstellung von Schriften nötig ist. API steht übrigens für „Application Programming Interface“ und dient unter anderem als Datenübermittler im Softwarebereich.</p>
			<p>Google Fonts speichert CSS- und Font-Anfragen sicher bei Google und ist somit geschützt. Durch die gesammelten Nutzungszahlen kann Google die Beliebtheit der Schriften feststellen. Die Ergebnisse veröffentlicht Google auf internen Analyseseiten, wie beispielsweise Google Analytics. Zudem verwendet Google auch Daten des eigenen Web-Crawlers, um festzustellen, welche Webseiten Google-Schriften verwenden. Diese Daten werden in der BigQuery-Datenbank von Google Fonts veröffentlicht. BigQuery ist ein Webservice von Google für Unternehmen, die große Datenmengen bewegen und analysieren wollen.</p>
			<p>Zu bedenken gilt allerdings noch, dass durch jede Google Font Anfrage auch Informationen wie IP-Adresse, Spracheinstellungen, Bildschirmauflösung des Browsers, Version des Browsers und Name des Browsers automatisch an die Google-Server übertragen werden. Ob diese Daten auch gespeichert werden, ist nicht klar feststellbar bzw. wird von Google nicht eindeutig kommuniziert.</p>
			<Heading as="h3">Wie lange und wo werden die Daten gespeichert?</Heading>
			<p>Anfragen für CSS-Assets speichert Google einen Tag lang auf Ihren Servern, die hauptsächlich außerhalb der EU angesiedelt sind. Das ermöglicht uns, mithilfe eines Google-Stylesheets die Schriftarten zu nutzen. Ein Stylesheet ist eine Formatvorlage, über die man einfach und schnell z.B. das Design bzw. die Schriftart einer Webseite ändern kann.</p>
			<p>Die Font-Dateien werden bei Google ein Jahr gespeichert. Google verfolgt damit das Ziel, die Ladezeit von Webseiten grundsätzlich zu verbessern. Wenn Millionen von Webseiten auf die gleichen Schriften verweisen, werden sie nach dem ersten Besuch zwischengespeichert und erscheinen sofort auf allen anderen später besuchten Webseiten wieder. Manchmal aktualisiert Google Schriftdateien, um die Dateigröße zu reduzieren, die Abdeckung von Sprache zu erhöhen und das Design zu verbessern.</p>
			<Heading as="h3">Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?</Heading>
			<p>Jene Daten, die Google für einen Tag bzw. ein Jahr speichert können nicht einfach gelöscht werden. Die Daten werden beim Seitenaufruf automatisch an Google übermittelt. Um diese Daten vorzeitig löschen zu können, müssen Sie den Google-Support auf <CustomLink src="https://support.google.com/?hl=de&tid=311123798">https://support.google.com/?hl=de&tid=311123798</CustomLink> kontaktieren. Datenspeicherung verhindern Sie in diesem Fall nur, wenn Sie unsere Seite nicht besuchen.</p>
			<p>Anders als andere Web-Schriften erlaubt uns Google uneingeschränkten Zugriff auf alle Schriftarten. Wir können also unlimitiert auf ein Meer an Schriftarten zugreifen und so das Optimum für unsere Webseite rausholen. Mehr zu Google Fonts und weiteren Fragen finden Sie auf <CustomLink src="https://developers.google.com/fonts/faq?tid=311123798">https://developers.google.com/fonts/faq?tid=311123798</CustomLink>. Dort geht zwar Google auf datenschutzrelevante Angelegenheiten ein, doch wirklich detaillierte Informationen über Datenspeicherung sind nicht enthalten. Es ist relativ schwierig (beinahe unmöglich), von Google wirklich präzise Informationen über gespeicherten Daten zu bekommen.</p>
			<p>Welche Daten grundsätzlich von Google erfasst werden und wofür diese Daten verwendet werden, können Sie auch auf <CustomLink src="https://www.google.com/intl/de/policies/privacy/">https://www.google.com/intl/de/policies/privacy/</CustomLink> nachlesen.</p>
			<Heading as="h2">Google Analytics Datenschutzerklärung</Heading>
			<p>Wir verwenden auf dieser Website Google Analytics der Firma Google LLC (1600 Amphitheatre Parkway Mountain View, CA 94043, USA) um Besucherdaten statistisch auszuwerten. Dabei verwendet Google Analytics zielorientierte Cookies.</p>
			<Heading as="h3">Cookies von Google Analytics</Heading>
			<ul>
				<li>_ga
					<ul>
						<li>Ablaufzeit: 2 Jahre</li>
						<li>Verwendung: Unterscheidung der Webseitenbesucher</li>
						<li>Beispielhafter Wert: GA1.2.1326744211.152311128595</li>
					</ul>
				</li>
				<li>_gid
					<ul>
						<li>Ablaufzeit: 24 Stunden</li>
						<li>Verwendung: Unterscheidung der Webseitenbesucher</li>
						<li>Beispielhafter Wert: GA1.2.1687193234.152311128595</li>
					</ul>
				</li>
				<li>_gat_gtag_UA_&lt;property-id&gt;
					<ul>
						<li>Ablaufzeit: 1 Minute</li>
						<li>Verwendung: Wird zum Drosseln der Anforderungsrate verwendet. Wenn Google Analytics über den Google Tag Manager bereitgestellt wird, erhält dieser Cookie den Namen _dc_gtm_ &lt;property-id&gt;.</li>
						<li>Beispielhafter Wert: 1</li>
					</ul>
				</li>
			</ul>
			<p>Nähere Informationen zu Nutzungsbedingungen und Datenschutz finden Sie unter <CustomLink src="http://www.google.com/analytics/terms/de.html">http://www.google.com/analytics/terms/de.html</CustomLink> bzw. unter <CustomLink src="https://support.google.com/analytics/answer/6004245?hl=de">https://support.google.com/analytics/answer/6004245?hl=de.</CustomLink></p>
			<Heading as="h3">Pseudonymisierung</Heading>
			<p>Unser Anliegen im Sinne der DSGVO ist die Verbesserung unseres Angebotes und unseres Webauftritts. Da uns die Privatsphäre unserer Nutzer wichtig ist, werden die Nutzerdaten pseudonymisiert. Die Datenverarbeitung erfolgt auf Basis der gesetzlichen Bestimmungen des Art 6 EU-DSGVO Abs 1 lit a (Einwilligung) und/oder f (berechtigtes Interesse) der DSGVO.</p>
			<Heading as="h3">Deaktivierung der Datenerfassung durch Google Analytics</Heading>
			<p>Mithilfe des <strong>Browser-Add-ons zur Deaktivierung</strong> von Google Analytics-JavaScript (ga.js, analytics.js, dc.js) können Website-Besucher verhindern, dass Google Analytics ihre Daten verwendet.</p>
			<p>Sie können die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: <CustomLink src="https://tools.google.com/dlpage/gaoptout?hl=de">https://tools.google.com/dlpage/gaoptout?hl=de</CustomLink></p>
			<Heading as="h2">Google Analytics Deaktivierungslink</Heading>
			<p>Wenn Sie auf folgenden <strong>Deaktivierungslink</strong> klicken, können Sie verhindern, dass Google weitere Besuche auf dieser Webseite erfasst. Achtung: Das Löschen von Cookies, die Nutzung des Inkognito/Privatmodus ihres Browsers, oder die Nutzung eines anderen Browsers führt dazu, dass wieder Daten erhoben werden.</p>
			<p>[google_analytics_optout]Google Analytics deaktivieren[/google_analytics_optout]</p>
			<Heading as="h2">Google Analytics Zusatz zur Datenverarbeitung</Heading>
			<p>Wir haben mit Google einen Direktkundenvertrag zur Verwendung von Google Analytics abgeschlossen, indem wir den “Zusatz zur Datenverarbeitung” in Google Analytics akzeptiert haben.</p>
			<p>Mehr über den Zusatz zur Datenverarbeitung für Google Analytics finden Sie hier: <CustomLink src="https://support.google.com/analytics/answer/3379636?hl=de&utm_id=ad">https://support.google.com/analytics/answer/3379636?hl=de&utm_id=ad</CustomLink></p>
			<p>Quelle: Erstellt mit dem Datenschutz Generator von AdSimple in Kooperation mit <CustomLink src="https://www.fashiongott.de/">fashiongott.de</CustomLink></p>
		</Wrapper>
	);
};

export default PrivacyPolicy;