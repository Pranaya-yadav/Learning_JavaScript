function generate(){
    var quotes = {
        "- Jules Renard" : '“The truly free man is the one who can turn down an invitation to dinner without giving an excuse.”' ,
        "- Albert Einstein" : '“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it\'s beauty.”',
        "- Pierce Brown": '“Man cannot be freed by the same injustice that enslaved it.”',
        "- Madeline Miller" : '“Bury us, and mark our names above. Let us be free.”',
        "- Mary Astell":'If all men are born free, how is it that all women are born slaves?”',
        "- Aaron Lauritsen":'“The struggles we endure today will be the ‘good old days’ we laugh about tomorrow.”',
        "- C.S.Lewis":'“I was not born to be free---I was born to adore and obey.”',
        "- John Galsworthy":'“Life calls the tune, we dance.”',
        "- Anne Morrow Lindbergh":'“Him that I love, I wish to be free -- even from me.”',
        "- Monique Duval":'“She decided to free herself, dance into the wind, create a new language. And birds fluttered around her, writing “yes” in the sky.”'
    }
    var authors = Object.keys(quotes);

    var author=authors[Math.floor(Math.random()*authors.length)]

    var quote = quotes[author];

    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML=author;
}

