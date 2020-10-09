/*

Skriv en funktion som tar en sträng som parameter, gör om alla tecken som inte är a-z (stora eller små) till HTML-entiteter och returnerar resultatet.

Läs mer om HTML-entiteter här: https://dev.w3.org/html5/html-author/charref

Din funktion måste byta ut alla "osäkra" tecken mot "säkra". De tecken ni behöver byta ut är:
<
>
å
ä
ö
'

Alla tecken som inte är a-z eller någon av ovanstående (t ex kommatecken, punkter, bindestreck osv) ska tas bort.

*/

function safe_string(string) {
    let ok = "0123456789/abcdefghijklmnopqrstuvxyz ABCDEFGHIJKLMNOPQRSTUVXYZ";
    let safe = ["&lt;", "&gt;", "&aring;", "&Aring;", "&auml;", "&Auml;", "&ouml;", "&Ouml;", "&apos;"];
    let unsafe = ["\<", "\>", "\å", "\Å", "\ä", "\Ä", "\ö", "\Ö", "\'"];
    let result = "";

    for (let i = 0; i < string.length; i++) {
        let replace = unsafe.indexOf(string[i]);
        let check_ok = ok.indexOf(string[i]);
        if (replace >= 0) {
            result += safe[replace];
        } else if (check_ok >= 0) {
            result += ok[check_ok];
        }
    }
    
    return result;
}

console.log( safe_string( "<h1>Sjörövare, O'hoj</h1>" ) ); // Expected output: //&lt;h1&gt;Sj&ouml;r&ouml;vare O&apos;hoj&lt;/h1&gt;
