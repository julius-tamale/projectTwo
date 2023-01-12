const quoteEl = document.querySelector('.quote');
const bibleVerse = document.querySelector('.bible-verse');

//create an array of verses
const memoryVerses = [
    {
        bibleBook: `1 Peter 4:3`,
        verseQuote: `For you have spent enough time in the past doing what pagans choose to do—living in debauchery, lust, drunkenness, orgies, carousing and detestable idolatry` 
    },
    {
        bibleBook:`1 John 4:20`,
        verseQuote:`Those who say, "I love God" and hate their brothers or sisters are liars. 
        After all, those who don't love their brothers or sisters whom they have seen can hardly love God whom they have not seen!`
    },
    {
        bibleBook:'1 Corithians 13:13',
        verseQuote: `Those who say, "I love God" and hate their brothers or sisters are liars. 
        After all, those who don't love their brothers or sisters whom they have seen can hardly love God whom they have not seen!`
    },
    {
        bibleBook:`Mathew 18:21-22`,
        verseQuote:`Then Peter came to Jesus and asked, 'Lord, how many times shall I forgive my brother or sister who sins against me? Up to seven times?' Jesus answered, 'I tell you, not seven times, but seventy-seven times`
    },
    {
        bibleBook:`Proverbs 17:9`,
        verseQuote:`Love prospers when a fault is forgiven, but dwelling on it separates close friends.`
    },
    {
        bibleBook:`2 Corinthians 9:6-8`,
        verseQuote: `Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver. And God is able to bless you abundantly, so that in all things at all times, having all that you need, you will abound in every good work.`
    },
    {
        bibleBook:`Matthew 6:1 - 4`,
        verseQuote: `Be careful not to practice your righteousness in front of others to be seen by them. If you do, you will have no reward from your Father in heaven. So when you give to the needy, do not announce it with trumpets, as the hypocrites do in the synagogues and on the streets, to be honored by others. Truly I tell you, they have received their reward in full. But when you give to the needy, do not let your left hand know what your right hand is doing, so that your giving may be in secret. Then your Father, who sees what is done in secret, will reward you.`
    },
    {
        bibleBook:`Colossians 3:5`,
        verseQuote:`Put to death, therefore, whatever belongs to your earthly nature: sexual immorality, impurity, lust, evil desires and greed, which is idolatry.`
    },
    {
        bibleBook:`1 Timothy 6:10`,
        verseQuote:`For the love of money is a root of all sorts of evil, and some by longing for it have wandered away from the faith and pierced themselves with many griefs.`
    },
    {
        bibleBook:`Ecclesiastes 5:10`,
        verseQuote:`He who loves money will not be satisfied with money, nor he who loves abundance with its income.  This too is vanity.`
    },
]

let buttonEl = document.querySelector('.btn');
buttonEl.addEventListener('click', myMemoryVerse);


function myMemoryVerse() {
    let quoteIndex = Math.floor(Math.random() * memoryVerses.length);
    quoteEl.textContent = memoryVerses[quoteIndex].verseQuote;
    bibleVerse.textContent = memoryVerses[quoteIndex].bibleBook;
    return;
}