---
layout: distill
title: Procedural Generation of Text Part One Names
description: procedural generation of names, honorifics, and epithets
tags: procedural-generation game-studies ludonarrative rust 
categories: Game-Design
date: 2026-08-1
featured: true
mermaid:
  enabled: true
  zoomable: true
citation: true
tabs: true

# The only thing needed is for you to set the `citation` key in the front matter to `true` Probably need to move it to the bottom or perhaps a button?

bibliography: 2026-07-12.bib 

#   - make sure that TOC names match the actual section names
#     for hyperlinks within the post to work correctly.
toc:
  - name: Subject
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: Citations
  - name: Footnotes
  - name: Code Blocks
  - name: Layouts
  - name: Procedural Generation
  - name: Names?
  - name: Code Experiments
  - name: Conclusion

# Below is an example of injecting additional post-specific styles.
# If you use this post as a template, delete this _styles block.
---

## Subject

**Main Topic**: Procedural Generation 101, Name Creation and Myth, Ludonarrative Thoughts, Queer Representation, Rust Tinkering
A Playlist to listen to while you read {<a href="https://music.apple.com/us/playlist/blog-post-one-proc-gen-names/pl.u-GgA5zr5CqVRE1" target="_blank">Apple Music</a>, Qobuz}

#### Take Away & the TL;DR

Salutations & Hello,<br>
In this inaugural article, we explore a basic definition and methods of procedural generation, starting off with some simple text engendering, as well as wander into tangents on the meaning of names and contemplate how naming relates to queer representation.
Along the way we'll build our own data pools to generate names, from simple random pairs until we expand to exciting whimsical honorifics and epithets, using the basic coding concept of concatenations: mixing and matching words from banks a of data.<br>

<aside><p>**Concatenation** is a fun coding word to describe combining two or more "strings" or rather pieces of text into one. Such as "foos" + "ball" = "**foosball**".  (╭ರ_•́) It's very in the spirit of the German language (• ᴗ • ᵕ)</p></aside>

---

## Procedural Generation
Procedural Generation describes the content created by an algorithm during the runtime of a program:a game world manifested through automated, parameterised systems, whose emergent results depending part on the player’s own tendency toward apophenia, (the human tendency to perceive patterns and form reason and narrative related to technically unrelated data), around the permutations.
<aside><p> A runtime could also be an analog operation of a board game, too, so proc-gen doesn't just exist in the digital realm!</p></aside>
Dr. Mark R. Johnson, sole designer of the Roguelike Ultima Ratio Regium, defines procedural content generation as "the writing of algorithms and systems which – within boundaries set by the designer – are unpredictable and can create in-game content which cannot be predicted until its creation."<d-footnote>Johnson, Mark R. _The Unpredictability of Gameplay_. Bloomsbury Academic, 2018, https://doi.org/10.5040/9781501321597.</d-footnote>

Proc-gen is most often used to increase replay value and data scalability; a generative system might construct anything from a sentence to a full-level terrain layout, or event sequence, and is frequently combined with static design. For example, randomising the presence or placement of fixed entities like treasure or monsters on an otherwise authored map

It’s worth distinguishing this, for the purpose of this research, from the current, much broader if chic and diluted, terminology of artificial intelligence (AI), a nominal abbreviation often synonymous with internet scraping, data infringement, and creativity decay attributed to some Large Language Models (LLMs) within the field of Machine Learning. What’s more, LLMs write their own rules, many of which we cannot see. Procedural content and generation for this research is concerned with hand-authored, designer-built rule systems and data that manifest systems of interactive emergence. 
<aside><p>The abbreviation LLms stands for "Large Learning Models".</p><p>*[LLMs] Large Learning Models</p></aside>

Handcrafted content still matters in a procedurally generated world, placed deliberately to carry narrative or guide navigational flow. As former Interplay and Obsidian Entertainment lead designer Chris Avellone notes, this is a delicate process, requiring balancing so that no results overshadow each other, too much repetition risks what Dr. Kate Compton has called "10,000 bowls of oatmeal" problem - technically distinct but uniform in uninteresting results and uniquely bland. While too much variation risks the opposite problem of potential analysis paralysis of so many unique options and information that it feels hopeless or unprocessable.<d-footnote>Short, Tanya X., and Tarn Adams. Procedural Storytelling in Game Design. Edited by Tanya X. Short and Tarn Adams, Second edition., Routledge, 2018,</d-footnote>
 
The result of a procedurally generated world can typically be traced back to a single large random number, colloquially called a seed, from which the world is grown according to the designer’s authored parameters and thematic data. Each time the code runs, a new world (or part of one) is instantiated from its seed; reusing the same seed number will reproduce roughly the same initial world state (at least before the player action diverges from it), providing a super useful bookmark of sorts as a way to revisit a particular generated world and as a debugging tool.

Due to the sheer multitudinous possibilities, procedural generation can also be notoriously fickle when testing. The potential results often being exceptionally greater than what can actually be reviewed so despite the mashing of the run key every few seconds to see what it does any longer form narrative consequences and world of systems, there is no really a practical way for us as the creators to get eyes on all the results even if were to dedicate their whole life to examining one main output from a proc-gen system.
<aside><p>Note: a 52 deck of playing cards has more shuffling outcomes than molecules in the Milky Way... (52 factorial) 8.0658175e+67</p></aside>

Procedural generation, in short, is a matter of control and intent. We can make things impactful and interesting. Temporing various algorithms and pseudorandom systems in combination with player agency makes each playthrough distinct without becoming meaningless. 

This is the main heart, appeal, and joy of procedural generation. There is no canonical world; it is different for each playthrough. Even as a game developer, you get to be surprised and delighted by the emergence of your creation, a personal terrarium for you or the players’ exploration.


## Names?

What's in a name and Why names? Setting aside that names are a conveniently manageable strings which work well to start generating and building and generating our textual world and lore.

Names carry weight. They hold legacy, symbolic representation, and roles. Plus, they are a fun and friendly introduction to building textual readouts in code. Names often hold the importance of knowing or understanding the nature of something or someone. As protagonist Kothe learns from his teacher Elodin, in *Name of the Wind*, "names have power, words have power...But a word is nothing but a painting of a fire. A name is the fire itself... a subject's true name as being comprised of everything that has gone into its shaping since its creation."<d-footnote>Rothfuss, Patrick. The Name of the Wind. DAW Books, 2007.</d-footnote>

We know the common aspect of demonology is that knowing the true name of a creature or entity holds some sway of power over them, such as summoning a demon to enact your will. Hidden names and elements of oneself that are feared to be discovered, names more reflected in the formal address we treat as a weakness. It gives pause, emphasis, and direction of the surrounding words.

"Speak of the devil, and they shall appear". Perhaps this is due to some king of mathematical logics. Demons fear the memory of their possibility of mortality, the layered spells which make up their essence, they have traded in and reformed over centuries, like a ship of Theseus.<d-footnote>https://johntscott.com/wp-content/uploads/2019/02/aes.brute_.force_.work_.factor.argument.pdf</d-footnote>
<aside><p>A modern computer AES-256 encryption would require billions of years to brute force, not to mention exceptional amount of power required and many replications of the strongest computers currently made. - But if you know the key its easy. Also apparently, quantum computers might bea bit of a game changer.</p></aside>

A true name is the key. The mathematical truism of a being is at risk with their true name being known leading to their unmaking. Judaism, those who know gods true name would have power over all of the creations, thus the Kabbalah. The Ancient Egyptian Book of the Dead is supposed to host the true names of those you meet in your afterlife as a means of controlling them. In christianity's Genesis, god tells Adam to name the animals, establishing their subservience to him, while later when Jacob and an angel wrestle (Genesis 32:22-32 and in Hosea), the angel refuses to tell him their name. <aside><p>That's right, first post and we are already quoting philosophical feminism, paganistic structures, fantastical existentialism, computer nerdery, and the fucking Bible. Goddammit, I don't want to talk about the fucking Bible again</p></aside> In some societies of Aboriginal Australians names are an extension of their bodies, to the point that when one dies, all those with that name adopt new ones as it is buried.<d-footnote>McGrath, P. and Phillips, E. (2008), "Australian findings on Aboriginal cultural practices associated with clothing, hair, possessions, and use of name of deceased persons." *International Journal of Nursing Practice*, 14: 57-66. [https://doi.org/10.1111/j.1440-172X.2007.00667.x](https://doi.org/10.1111/j.1440-172X.2007.00667.x)</d-footnote>

<aside><p>"fragmentary ancient magical text called the Chaldean Oracles of Zoroaster: “Change not the barbarous Names of Evocation for there are sacred Names in every language which are given by God, having in the Sacred Rites a Power Ineffable” (Westcott 57)." -*Game Magic: A Designers Guide to magics systems and practice* p. 210</p></aside>

To name something or someone, the act of giving a name, is to impose some power. The anime *That Time I was Reincarnated as a Slime* shows this as average monsters have no name, but when named, they transform into stronger versions of themselves.
<aside>An anime is something to legitimately reference, yes?</aside>
Through identity, we gain meaning, which is why the names our parents imposed on us doubles as a summon for reprimands.
<aside>And yes, I am relating anime, the bible, human history, and speculative fiction.</aside>

In his essay *The Place of Culture, Society, and Politics in Video Game World-Building*, Mark R. Johnson discusses many elements of his culture and world generator, Ultima Ratio Regum <aside> Ultima Ratio Regum is Latin for "the last argument of kings"</aside>he talks about his system for generating names as one of the many ways to distinguish the permutated cultures. "*The game has around 50 archetypes of names, but then each archetype can either be altered randomly, or altered according to the rest of the game world, drawing on ideas like animals or plants to create a set of possible names. Once again, when the player learns a style of naming, they should be able to identify the origin of another character and then make informed choices on the back of that information."*. This connects to a core aspect of the game is a Nikki Lee <aside><p>Nikki Lee is a fine art photographer known to document her time assimilating into unusual subcategories of culture around race, age, music, professions I studied in undergrad who stuck with me. Check out her amazing 2001 work *Nikki S. Lee: Projects*. Also, tangent, but if you want to know my goto favorite photography is the work by Shana & Robert ParkeHarrison -check out their amazing book: *The Brothers Architect* or *Counterpoint*</p></aside>a player infiltrating and discovering culture studying from the inside, gathering deeper insight and learning the the structures and unwritten rules enough to pass. This may also resonate on a personal, lower level to a very real of sometime the subculture rulesets that people might not be familiar with masking and mimicking elements to fit in.


<aside><p>Once you gave a thing a name, you gave it life</p><p><em>
- Terry Pratchett</em></p></aside>

<p>
{% include figure.liquid loading="eager" path="assets/img/blog_images/LighthouseSeaCurse.gif" class="img-fluid rounded z-depth-1" %}
  <img src="assets/img/blog_images/LighthouseSeaCurse.gif" alt="sea curse in the film The Lighthouse" style="float: left; margin-right: 15px; margin-bottom: 10px; width: 268px; height:268px;">
Names are how we address each other, how legal agreements are signature, our identity status made official. Plus we totally need a name to properly curse someone.<br>
Names can give power and are power. Victor never names his composite creature in the book *Frankenstein* despite its clear dismay and display of considerable humanity, and so Victor never accepts the being to be treated humanely. (Look how that worked out for him, eh?) Victor never truly has power over the creature either, the thing naming is supposed to grant and calls his creation "deamon" (like the Unix system), a likely reference to a walker between heaven and earth - a superhuman of sorts as noted by Charles E. Robinson's 2017 annotated edition of *Frankenstein*.
</p>

Many procedural games do the same thing: naming a generated monster "the Butcher" instead of leaving it as "imp #4" to give it weight and projected meaning. the point is we need to be calling things more than just monster, especially those of noted quality. Diablo, PrincessRL and many games with procedural element name a procedural being to give emphasis and denote power, that these entities are of importance and worth consideration before approach.
<aside><p>“It's poor judgment', said Grandpa 'to call anything by a name. We don't know what a hobgoblin or a vampire or a troll is. Could be lots of things. You can't heave them into categories with labels and say they'll act one way or another. That'd be silly. They're people. People who do things. Yes, that's the way to put it. People who *do* things.”</p><p><em>― Ray Bradbury, *The October Country*</em></p></aside>
Names are what are called forth from parents and loved ones for acknowledgement or admonition, In a formal setting, its whats transcribed on degrees, decrees, and identification. They are what we obscure when we do not want to be found, what we shed when starting over. Titles and honorifics, work like level ups; earned through deeds, collected achievements, while small community nicknames only used by a faction of few indicate a private in group. Its the foundational semiotics to encapsulate an entity, naming through taxonomy, but with exceptional potential uniqueness.

World Builder author Mark J. P. Wolf writing on subcreation and invented languages, notes that a name "has the potential to cast a new light on the things it names, by emphasizing certain aspects about them or relating them to each in new ways through linguistic similarities" even if, naming is a comparatively shallow act of invention compared to an entire language. Still a name projects to the world what something is.

<aside><p>"Names should always have resonance, but they are given by others" - Dirk Krecker (fine artist, quote from *Typewriter Art* pg 127)</p></aside>

In Pokémon *nuzlocke* challenges, a self imposed gameplay based on player constraints revolving around Pokémon, one core component is to *name* every Pokémon you catch to build attachment and push against the flippant casualness the game otherwise encourages you to use cycling through intelligent creatures.

<aside><p>"Names establish character, lead into events, and create expectations."<br>— Jack Halberstam, *Trans\*: A Quick and Quirky Account of Gender Variability*, p. 2</p></aside>

The first time I played the intricate roguelike *Nethack*, I was spawned with a pet cat and immediately had to look up the hash command to name them (Figmus). I spent the rest of my short run, doomed run genuinely worried about my cats well being, at one point chasing her down a trapped door she fell through. Not just an emergent-narrative anecdote; but naming her contributed to the made connection to this clumsy, endearing creature real in the first place.

<aside><p>At the risk of over-quoting Terry Pratchett: this reminds me of *Good Omens*, where the (mildly antagonistic) Adam names his dog "Dog." Adam still adores that dog completely — the name is tautological, but the identity it points to is real.</p></aside>
Titles also hold sway and remembrance through the ages and time. Sometimes, honorifics are not as desired or controlled well by those who earn them. Anyone named Tim the Weak, Sarah Bitchen' Priestess, or Saint Hilarious Gaylord might not be what the individuals where originally hoping for.

## Reclamation of Identity and Queer Introspection

<aside><p> “All things are defined by names. Change the name, and you change the thing.”</p><p><em>
― Terry Pratchett, Pyramids</em></p></aside>
This leads me to think about changing or discovering one's name of oneself. An often queer journey for trans people exploring a more personal reflection of their expression and role expectations. They employ tactics like, during a name search, like going to a coffee slinging houses and testing out pseudonyms via magical barista witches as they supply callouts of monikers for you to test your spirit address.

Name is recognition, and not having yours used is further social exile.

A lot of non-queer people also look at adjusting an aspect of their name, sharing last names, combining like a captain planet into some truly new hybrid surname. Sometimes a legacy is wished to be carried like a tattoo worn, and in a middle name, a person's previous surname or a family member's forename is held. Changing a name can be a big decision with consequences and many battles with the ghosts and echoes of a past (meme well, of course, I know he's me). 

While there are a fair few writings on the cleverness of proper naming of characters that instill visualisation and projected investments, the truth is, we often make our names in all their awkwardness. That is more in the spirit of this exercise, while I certainly curated hundreds of name pieces that are of particular interest to my style and lexicon taste, they will still be some dirpy, clumsy, peculiar outcomes, which just means that those individual narratives will have to overcome and embrace their names in all their glory.

<aside><p>“Names are unique sounds and cadences of words that are attached to one specific individual-sort of like a kind of theme music.”</p><p><em>― Jim Butcher, Storm Front</em></p></aside>

I have a friend who is Bobby; his birth certificate is directly Bobby, not Robert, not Bob, not Bobert. Bobby. Which, he insists, as that is the name that he has built upon and is true from all the way down to a formal living papers standpoint. You might think this is not the name for a knight or wizard, but I would say even better. It's more rememberable Bobby the Brave. more remarkable Bobby, High Wizard First Class. <img src="{{'FrierenNecklace.gif'}}" class="img-fluid rounded z-depth-1" alt="Gif of Frieren showing her mage class necklace from the anime Frieren: Beyond Journey's End" style="float: right; margin-left: 15px; margin-bottom: 10px; width: 268px; height:268px;">
 More stark, Bobby the Dark Necromancer of the Unknown Tundra. And certainly speaks to a certain world-building, Bobby, Vampire Slayer - here to fix your Miskatonic quandaries. This is all starting to feel a little over the top, so I'll move on.

If allowed in the temporal diegesis of the world, any name can become impactful, even more so if innocuous. We can only slightly try to mould our addresses through nicknames in the hope of forming a barrier to our names (barrier is a powerful shielding spell), a larger bubble in which we reside that shields some of us in an unknown but often taken on a life that is greater than our birth names.

<aside><p>“It ain't what they call you, it's what you answer to.”</p><p><em> 
― W.C. Fields</em></p></aside>

When choosing a name, we get the unprecedented option to make our names mean something to ourselves or in the greater context of our culture or world. When we have a name we are granted, we can only shape it through our actions, luck, and projected perceptions. It's a rare empowering moment of self-actualization manifested from introspection.

<aside><p>Life ain't easy for a boy named Sue</p><p><em> - Johnny Cash - A boy named Sue</em></p><p>
(Accidental trans man anthem?)</p></aside>

So there can be fun in authoring a character's sobriquet Scarlet Dewinter, to a personality of bubbly ray of helpful sunshine. It might not reflect traits or heritage/status (unless we get a bit meta and say winter is a prominent place in the fantasy world this character's from, and if perhaps the trait is rebelling against their name to be spiffily optimistic and energised)

Nuns all get their Mary name; their second name is preceded by mother. Additionally, in Catholicism, you have popes taking on names, and it is about legacy and building on top of the previous predecessors' vibe of their work or personality. Much like the Roman cognomen surnames during ancient times.

<aside><p>“What's in a name? That which we call a rose by any other name would smell as sweet.”</p><p><em> ― William Shakespeare, Romeo and Juliet</em></p></aside>

Nuns all get their Mary name; their second name is preceded by mother. Additionally, in Catholicism, you have popes taking on names, and it is about legacy and building on top of the previous predecessors' vibe of their work or personality. Much like the Roman cognomen surnames during ancient times.

We, of course, can generate our own theophorics, non-denominational and otherwise, for our zealots and clerics. Beloved of, bestowed by, blessed by, blessing from, is the spirit of, beloved of, eternal dweller of %deity% splendour of, %deity% faithful to, guided by, handmaid of, protected by, provided by,  warrior of, etc.

{% include figure.liquid loading="eager" path="assets/img/blog_images/ZotePrecept32.png" class="img-fluid rounded z-depth-1" %}
<em>32	Precept Thirty-Two: 'Names Have Power'.<br>
Names have power, and so to name something is to grant it power. I myself named my nail 'Life Ender'. Do not steal the name I came up with! Invent your own!*
<em>*- Zote the Mighty (Hollow Knight)*</em>


# Code Experience
But we are also putting the code in a details drop down!

{% details Click here to look at and run code%}

{% tabs ExampleOne %}
{% tab ExampleOne Rust %}
```rust
//Importing the rand crate to give us easy access to random function macros.
use rand::prelude::*;

//Creating some name arrays of data to pull from to create our random names 16x16
const FORENAMES: &[&str] = &[
    "atstrid",
    "douglas",
    "elizabeth",
    "ellen",
    "esther",
    "henry",
    "mark",
    "mary",
    "mia",
    "nico",
    "opal",
    "raki",
    "sebastián",
    "thom",
    "victoria",
    "wendy",
];

const SURNAMES: &[&str] = &[
    "appleton",
    "azarov",
    "babbage",
    "blackwell",
    "bloom",
    "button",
    "conway",
    "devi",
    "garcia",
    "harris",
    "kozuki",
    "lowell",
    "müller",
    "quinlan",
    "satō",
    "thimble",
];

    //It's strangly obtuse to capitalize the first letter of a string in Rust, we have to break it apart and then reconcatinate it so heres a function to do just that
fn capitalize(s: &str) -> String {
    if s.is_empty() {
        return s.to_string();
    }
    let mut chars = s.chars();
    let first_char = chars.next().unwrap();
    let capitalized_first: String = first_char.to_uppercase().collect();
    let rest: String = chars.collect();
    format!("{}{}", capitalized_first, rest)
}

//Here's our main function
fn main() {
    let mut rng = rand::rng();
        //Loop the code 5 times so we can get five different results
    for _i in 0..5
    { 
        // added the capitalize to surname. It seems you encapsulate a into other functions, not sure how to do that with external code referencesationthe 
    let namez = format!("{} {}", capitalize(FORENAMES.choose(&mut rng).unwrap()), capitalize(SURNAMES.choose(&mut rng).unwrap()));
    println!("{namez}");
    }
}
```

{% endtab %}
{% tab ExampleOne codeplayer %}
<iframe src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&code=%0A%2F%2FImporting+the+rand+crate+to+give+us+easy+access+to+random+function+macros.%0Ause+rand%3A%3Aprelude%3A%3A*%3B%0A%0A%2F%2FCreating+some+name+arrays+of+data+to+pull+from+to+create+our+random+names+16x16%0Aconst+FORNAMES%3A+%26%5B%26str%5D+%3D+%26%5B%0A++++%22atstrid%22%2C%0A++++%22douglas%22%2C%0A++++%22elizabeth%22%2C%0A++++%22ellen%22%2C%0A++++%22esther%22%2C%0A++++%22henry%22%2C%0A++++%22mark%22%2C%0A++++%22mary%22%2C%0A++++%22mia%22%2C%0A++++%22nico%22%2C%0A++++%22opal%22%2C%0A++++%22raki%22%2C%0A++++%22sebasti%C3%A1n%22%2C%0A++++%22thom%22%2C%0A++++%22victoria%22%2C%0A++++%22wendy%22%2C%0A%5D%3B%0A%0Aconst+SURNAMES%3A+%26%5B%26str%5D+%3D+%26%5B%0A++++%22appleton%22%2C%0A++++%22azarov%22%2C%0A++++%22babbage%22%2C%0A++++%22blackwell%22%2C%0A++++%22bloom%22%2C%0A++++%22button%22%2C%0A++++%22conway%22%2C%0A++++%22devi%22%2C%0A++++%22garcia%22%2C%0A++++%22harris%22%2C%0A++++%22kozuki%22%2C%0A++++%22lowell%22%2C%0A++++%22m%C3%BCller%22%2C%0A++++%22quinlan%22%2C%0A++++%22sat%C5%8D%22%2C%0A++++%22thimble%22%2C%0A%5D%3B%0A%0A++++%2F%2FIt%27s+strangly+obtuse+to+capitalize+the+first+letter+of+a+string+in+Rust%2C+we+have+to+break+it+apart+and+then+reconcatinate+it+so+heres+a+function+to+do+just+that%0Afn+capitalize%28s%3A+%26str%29+-%3E+String+%7B%0A++++if+s.is_empty%28%29+%7B%0A++++++++return+s.to_string%28%29%3B%0A++++%7D%0A++++let+mut+chars+%3D+s.chars%28%29%3B%0A++++let+first_char+%3D+chars.next%28%29.unwrap%28%29%3B%0A++++let+capitalized_first%3A+String+%3D+first_char.to_uppercase%28%29.collect%28%29%3B%0A++++let+rest%3A+String+%3D+chars.collect%28%29%3B%0A++++format%21%28%22%7B%7D%7B%7D%22%2C+capitalized_first%2C+rest%29%0A%7D%0A%0A%2F%2FHere%27s+our+main+function%0Afn+main%28%29+%7B%0A++++let+mut+rng+%3D+rand%3A%3Arng%28%29%3B%0A++++++++%2F%2FLoop+the+code+5+times+so+we+can+get+five+different+results%0A++++for+_i+in+0..5%0A++++%7B+%0A++++++++%2F%2F+added+the+capitalize+to+surname.+It+seems+you+encapsulate+a+into+other+functions%2C+not+sure+how+to+do+that+with+external+code+referencesationthe+%0A++++let+namez+%3D+format%21%28%22%7B%7D+%7B%7D%22%2C+capitalize%28FORNAMES.choose%28%26mut+rng%29.unwrap%28%29%29%2C+capitalize%28SURNAMES.choose%28%26mut+rng%29.unwrap%28%29%29%29%3B%0A++++println%21%28%22%7Bnamez%7D%22%29%3B%0A++++%7D%0A%7D" height="650" width="600" title="Rust Basic Names"></iframe> 

{% endtab %}

{% endtabs %}


{% enddetails %}


Here is the web player of the rust code in action that you can run yourselfs!
 
## Another example


Behold our beautiful cynosure!
Now that we have our result, what can we deduce from it? Do we like it? What should we tweak? Obviously, a few more brute force tests might reveal more of the underlying patterns and help us form stronger opinions of likes/dislikes, pros/cons, and further developmental inklings.


We can perhaps reverse some aspects in a kind of tmesis, interjecting some additional epithets.
(code)
You can see how making things complex can get a little muddy, so sometimes it's best to step back and think about purely what is needed to give the illusion of depth and to hone in on the theme. Is this messy? Yes, I just started learning Rust, and I have no idea what I am doing, so there are probably many better ways to do this, and hopefully by the time I am done, I will know more in the correct direction to empower my wonky creations.





{% details Click here to look at and run more rust code examples%}

{% tabs ExamplesTwo %}

{% tab ExamplesTwo Rust Compound Surnames %}

```rust

//First, let's import some rand crate macros because we are going to be using a lot of random choice selection and bool generation
use rand::prelude::*;
use rand::random;

//I have made a few constant arrays to store a few different word pools, the first of which is an awkward attempt to make a simple concatenating forename generator
const FIRST_PARTS_ONE: &[&str] = &["bright", "rach", "mary", "wet", "shel", "dear", "alk", "er", "sher", "zor"];
const FIRST_PARTS_TWO: &[&str] = &["ton", "al", "es", "son", "ler", "win"];

const LAST_PARTS_ONE: &[&str] = &["willow", "bloom", "fair", "storm", "love", "ember", "vale", "deep", "dark", "black", "red", "true", "brass"];
const LAST_PARTS_TWO: &[&str] = &["miller", "fisher", "ton", "gate", "stich", "bell", "thimble", "smith", "craft", "weather", "wright"];

const FORNAME_SINGLE: &[&str] = &["atstrid", "douglas", "elizabeth", "esther", "nico", "opal", "sebastián", "victoria", "wendy", "zoe", "harper", "kim", "morgan", "addison", "robin", "jing",];
const SURNAME_SINGLE: &[&str] = &["acuña", "aoki", "babbage", "blackwell", "conway", "eldridge", "erdős", "fazil", "fuller", "garcia", "harris", "kozuki", "lowell", "müller", "naccarato", "nzuyen","quinlan", "satō","tsai", "wagner", "zote",];

//function to generate a first and last name that references a bool if to select single names or concatenated names for fore/surnames.
fn generate_name() -> String {
    let mut rng = rand::rng();
    let use_two = random(); // Hey it's a bool generator into an if else statement, the bool is the condition - if true, the name will be two words concatenated
    let first_name = if use_two {
    format!(
        "{}{}",
        capitalize(FIRST_PARTS_ONE.choose(&mut rng).unwrap()), //passing the first section to the capitalization function.
        FIRST_PARTS_TWO.choose(&mut rng).unwrap())
    } else {
        capitalize(FORNAME_SINGLE.choose(&mut rng).unwrap())
    };
    //And again lets set it to random if it's one or two words concatenated to a surname
    let use_two = random();
    let last_name = if use_two {
    format!(
        "{}{}",
        capitalize(LAST_PARTS_ONE.choose(&mut rng).unwrap()),
        LAST_PARTS_TWO.choose(&mut rng).unwrap())
    } else {
       capitalize(SURNAME_SINGLE.choose(&mut rng).unwrap())
    };
    //Finally, we now add the two chosen/constructed names to the final name combining the first and last name.
    format!("{} {}", first_name, last_name)
}

    //My wonky capitalizer function that I keep running into borrowing string type headaches
fn capitalize(s: &str) -> String {
    if s.is_empty() {
        return s.to_string();
    }
    let mut chars = s.chars();
    let first_char = chars.next().unwrap(); //Basically, it splits off the first character, capitalizes it, and then reassembles it.
    let capitalized_first: String = first_char.to_uppercase().collect();
    let rest: String = chars.collect();
    format!("{}{}", capitalized_first, rest)
}

fn main() {
    for _ in 00..5{ // Nesting our result in a loop * 5 so we can see a few variants
        //Now we call the name (generate_name) function and then print the results!
        let name = generate_name();
        println!("{}", name);
    }
}
```

{% endtab %}

{% tab ExamplesTwo codeplayer compound %}
<iframe src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&code=%2F%2FFirst%2C+let%27s+import+rand+because+we+are+going+to+be+using+a+lot+of+random+choice+selection+and+bool+generation%0Ause+rand%3A%3Aprelude%3A%3A*%3B%0Ause+rand%3A%3Arandom%3B%0A%0A%2F%2FI+have+made+a+few+constant+arrays+to+store+a+few+different+word+pools%2C+the+first+of+which+is+an+awkward+attempt+to+make+a+simple+concatenating+forename+generator%0Aconst+FIRST_PARTS_ONE%3A+%26%5B%26str%5D+%3D+%26%5B%22bright%22%2C+%22rach%22%2C+%22mary%22%2C+%22wet%22%2C+%22shel%22%2C+%22dear%22%2C+%22alk%22%2C+%22er%22%2C+%22sher%22%2C+%22zor%22%5D%3B%0Aconst+FIRST_PARTS_TWO%3A+%26%5B%26str%5D+%3D+%26%5B%22ton%22%2C+%22al%22%2C+%22es%22%2C+%22son%22%2C+%22ler%22%2C+%22win%22%5D%3B%0A%0Aconst+LAST_PARTS_ONE%3A+%26%5B%26str%5D+%3D+%26%5B%22willow%22%2C+%22bloom%22%2C+%22fair%22%2C+%22storm%22%2C+%22love%22%2C+%22ember%22%2C+%22vale%22%2C+%22deep%22%2C+%22dark%22%2C+%22black%22%2C+%22red%22%2C+%22true%22%2C+%22brass%22%5D%3B%0Aconst+LAST_PARTS_TWO%3A+%26%5B%26str%5D+%3D+%26%5B%22miller%22%2C+%22fisher%22%2C+%22ton%22%2C+%22gate%22%2C+%22stich%22%2C+%22bell%22%2C+%22thimble%22%2C+%22smith%22%2C+%22craft%22%2C+%22weather%22%2C+%22wright%22%5D%3B%0A%0Aconst+FORNAME_SINGLE%3A+%26%5B%26str%5D+%3D+%26%5B%22atstrid%22%2C+%22douglas%22%2C+%22elizabeth%22%2C+%22esther%22%2C+%22nico%22%2C+%22opal%22%2C+%22sebasti%C3%A1n%22%2C+%22victoria%22%2C+%22wendy%22%2C+%22zoe%22%2C+%22harper%22%2C+%22kim%22%2C+%22morgan%22%2C+%22addison%22%2C+%22robin%22%2C+%22jing%22%2C%5D%3B%0Aconst+SURNAME_SINGLE%3A+%26%5B%26str%5D+%3D+%26%5B%22acu%C3%B1a%22%2C+%22aoki%22%2C+%22babbage%22%2C+%22blackwell%22%2C+%22conway%22%2C+%22eldridge%22%2C+%22erd%C5%91s%22%2C+%22fazil%22%2C+%22fuller%22%2C+%22garcia%22%2C+%22harris%22%2C+%22kozuki%22%2C+%22lowell%22%2C+%22m%C3%BCller%22%2C+%22naccarato%22%2C+%22nzuyen%22%2C%22quinlan%22%2C+%22sat%C5%8D%22%2C%22tsai%22%2C+%22wagner%22%2C+%22zote%22%2C%5D%3B%0A%0A%2F%2Ffunction+to+generate+a+first+and+last+name+that+references+a+bool+if+to+select+single+names+or+concatenated+names+for+fore%2Fsurnames.%0Afn+generate_name%28%29+-%3E+String+%7B%0A++++let+mut+rng+%3D+rand%3A%3Arng%28%29%3B%0A++++let+use_two+%3D+random%28%29%3B+%2F%2F+Hey+it%27s+a+bool+generator+into+an+if+else+statement%2C+the+bool+is+the+condition+-+if+true%2C+the+name+will+be+two+words+concatenated%0A++++let+first_name+%3D+if+use_two+%7B%0A++++format%21%28%0A++++++++%22%7B%7D%7B%7D%22%2C%0A++++++++capitalize%28FIRST_PARTS_ONE.choose%28%26mut+rng%29.unwrap%28%29%29%2C+%2F%2Fpassing+the+first+section+to+the+capitalization+function.%0A++++++++FIRST_PARTS_TWO.choose%28%26mut+rng%29.unwrap%28%29%29%0A++++%7D+else+%7B%0A++++++++capitalize%28FORNAME_SINGLE.choose%28%26mut+rng%29.unwrap%28%29%29%0A++++%7D%3B%0A++++%2F%2FAnd+again+lets+set+it+to+random+if+it%27s+one+or+two+words+concatenated+to+a+surname%0A++++let+use_two+%3D+random%28%29%3B%0A++++let+last_name+%3D+if+use_two+%7B%0A++++format%21%28%0A++++++++%22%7B%7D%7B%7D%22%2C%0A++++++++capitalize%28LAST_PARTS_ONE.choose%28%26mut+rng%29.unwrap%28%29%29%2C%0A++++++++LAST_PARTS_TWO.choose%28%26mut+rng%29.unwrap%28%29%29%0A++++%7D+else+%7B%0A+++++++capitalize%28SURNAME_SINGLE.choose%28%26mut+rng%29.unwrap%28%29%29%0A++++%7D%3B%0A++++%2F%2FFinally%2C+we+now+add+the+two+chosen%2Fconstructed+names+to+the+final+name+combining+the+first+and+last+name.%0A++++format%21%28%22%7B%7D+%7B%7D%22%2C+first_name%2C+last_name%29%0A%7D%0A%0A++++%2F%2FMy+wonky+capitalizer+function+that+I+keep+running+into+borrowing+string+type+headaches%0Afn+capitalize%28s%3A+%26str%29+-%3E+String+%7B%0A++++if+s.is_empty%28%29+%7B%0A++++++++return+s.to_string%28%29%3B%0A++++%7D%0A++++let+mut+chars+%3D+s.chars%28%29%3B%0A++++let+first_char+%3D+chars.next%28%29.unwrap%28%29%3B+%2F%2FBasically%2C+it+splits+off+the+first+character%2C+capitalizes+it%2C+and+then+reassembles+it.%0A++++let+capitalized_first%3A+String+%3D+first_char.to_uppercase%28%29.collect%28%29%3B%0A++++let+rest%3A+String+%3D+chars.collect%28%29%3B%0A++++format%21%28%22%7B%7D%7B%7D%22%2C+capitalized_first%2C+rest%29%0A%7D%0A%0Afn+main%28%29+%7B%0A++++for+_+in+00..5%7B+%2F%2F+Nesting+our+result+in+a+loop+*+5+so+we+can+see+a+few+variants%0A++++++++%2F%2FNow+we+call+the+name+%28generate_name%29+function+and+then+print+the+results%21%0A++++++++let+name+%3D+generate_name%28%29%3B%0A++++++++println%21%28%22%7B%7D%22%2C+name%29%3B%0A++++%7D%0A%7D" height="650" width="600" title="Rust Compound Names"></iframe> 

{% endtab %}

{% tab ExamplesTwo Rust Compound Surnames Advanced %}

```rust
//First, let's import rand because we are going to be using a lot of random choice selection and bool generation
use rand::prelude::*;
use rand::random;

//I have made a few constant arrays to store a few different word pools, the first of which is an awkward attempt to make a simple concatenating forename generator
const FIRST_PARTS_ONE: &[&str] = &["bright", "rach", "mary", "wet", "shel", "dear", "alk", "er", "sher", "zor"];
const FIRST_PARTS_TWO: &[&str] = &["ton", "al", "es", "son", "ler", "win"];

const LAST_PARTS_ONE: &[&str] = &["willow", "bloom", "fair", "storm", "love", "ember", "vale", "deep", "dark", "black", "red", "true", "brass"];
const LAST_PARTS_TWO: &[&str] = &["miller", "fisher", "ton", "gate", "stich", "bell", "thimble", "smith", "craft", "weather", "wright"];

const FORNAME_SINGLE: &[&str] = &["atstrid", "douglas", "elizabeth", "esther", "nico", "opal", "sebastián", "victoria", "wendy", "zoe", "harper", "kim", "morgan", "addison", "robin", "jing",];
const SURNAME_SINGLE: &[&str] = &["acuña", "aoki", "babbage", "blackwell", "conway", "eldridge", "erdős", "fazil", "fuller", "garcia", "harris", "kozuki", "lowell", "müller", "naccarato", "nzuyen","quinlan", "satō","tsai", "wagner", "zote",];

//function to generate a first and last name that references a bool if to select single names or concatenated names for fore/surnames.
fn generate_name() -> String {
    let mut rng = rand::rng();
    let use_two = random(); // Hey it's a bool generator into an if else statement, the bool is the condition - if true, the name will be two words concatenated
    let first_name = if use_two {
    format!(
        "{}{}",
        capitalize(FIRST_PARTS_ONE.choose(&mut rng).unwrap()), //passing the first section to the capitalization function.
        FIRST_PARTS_TWO.choose(&mut rng).unwrap())
    } else {
        capitalize(FORNAME_SINGLE.choose(&mut rng).unwrap())
    };
    //And again lets set it to random if it's one or two words concatenated to a surname
    let use_two = random();
    let last_name = if use_two {
    format!(
        "{}{}",
        capitalize(LAST_PARTS_ONE.choose(&mut rng).unwrap()),
        LAST_PARTS_TWO.choose(&mut rng).unwrap())
    } else {
       capitalize(SURNAME_SINGLE.choose(&mut rng).unwrap())
    };
    //Finally, we now add the two chosen/constructed names to the final name combining the first and last name.
    format!("{} {}", first_name, last_name)
}

    //My wonky capitalizer function that I keep running into borrowing string type headaches
fn capitalize(s: &str) -> String {
    if s.is_empty() {
        return s.to_string();
    }
    let mut chars = s.chars();
    let first_char = chars.next().unwrap(); //Basically, it splits off the first character, capitalizes it, and then reassembles it.
    let capitalized_first: String = first_char.to_uppercase().collect();
    let rest: String = chars.collect();
    format!("{}{}", capitalized_first, rest)
}

fn main() {
    for _ in 00..5{ // Nesting our result in a loop * 5 so we can see a few variants
        //Now we call the name (generate_name) function and then print the results!
        let name = generate_name();
        println!("{}", name);
    }
}

```
{% endtab %}

{% tab ExamplesTwo Codeplayer Compound Advanced%}
<iframe src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&code=%2F%2FFirst%2C+let%27s+import+rand+because+we+are+going+to+be+using+a+lot+of+random+choice+selection+and+bool+generation%0Ause+rand%3A%3Aprelude%3A%3A*%3B%0Ause+rand%3A%3Arandom%3B%0A%0A%2F%2FI+have+made+a+few+constant+arrays+to+store+a+few+different+word+pools%2C+the+first+of+which+is+an+awkward+attempt+to+make+a+simple+concatenating+forename+generator%0Aconst+FIRST_PARTS_ONE%3A+%26%5B%26str%5D+%3D+%26%5B%22bright%22%2C+%22rach%22%2C+%22mary%22%2C+%22wet%22%2C+%22shel%22%2C+%22dear%22%2C+%22alk%22%2C+%22er%22%2C+%22sher%22%2C+%22zor%22%5D%3B%0Aconst+FIRST_PARTS_TWO%3A+%26%5B%26str%5D+%3D+%26%5B%22ton%22%2C+%22al%22%2C+%22es%22%2C+%22son%22%2C+%22ler%22%2C+%22win%22%5D%3B%0A%0Aconst+LAST_PARTS_ONE%3A+%26%5B%26str%5D+%3D+%26%5B%22willow%22%2C+%22bloom%22%2C+%22fair%22%2C+%22storm%22%2C+%22love%22%2C+%22ember%22%2C+%22vale%22%2C+%22deep%22%2C+%22dark%22%2C+%22black%22%2C+%22red%22%2C+%22true%22%2C+%22brass%22%5D%3B%0Aconst+LAST_PARTS_TWO%3A+%26%5B%26str%5D+%3D+%26%5B%22miller%22%2C+%22fisher%22%2C+%22ton%22%2C+%22gate%22%2C+%22stich%22%2C+%22bell%22%2C+%22thimble%22%2C+%22smith%22%2C+%22craft%22%2C+%22weather%22%2C+%22wright%22%5D%3B%0A%0Aconst+FORNAME_SINGLE%3A+%26%5B%26str%5D+%3D+%26%5B%22atstrid%22%2C+%22douglas%22%2C+%22elizabeth%22%2C+%22esther%22%2C+%22nico%22%2C+%22opal%22%2C+%22sebasti%C3%A1n%22%2C+%22victoria%22%2C+%22wendy%22%2C+%22zoe%22%2C+%22harper%22%2C+%22kim%22%2C+%22morgan%22%2C+%22addison%22%2C+%22robin%22%2C+%22jing%22%2C%5D%3B%0Aconst+SURNAME_SINGLE%3A+%26%5B%26str%5D+%3D+%26%5B%22acu%C3%B1a%22%2C+%22aoki%22%2C+%22babbage%22%2C+%22blackwell%22%2C+%22conway%22%2C+%22eldridge%22%2C+%22erd%C5%91s%22%2C+%22fazil%22%2C+%22fuller%22%2C+%22garcia%22%2C+%22harris%22%2C+%22kozuki%22%2C+%22lowell%22%2C+%22m%C3%BCller%22%2C+%22naccarato%22%2C+%22nzuyen%22%2C%22quinlan%22%2C+%22sat%C5%8D%22%2C%22tsai%22%2C+%22wagner%22%2C+%22zote%22%2C%5D%3B%0A%0A%2F%2Ffunction+to+generate+a+first+and+last+name+that+references+a+bool+if+to+select+single+names+or+concatenated+names+for+fore%2Fsurnames.%0Afn+generate_name%28%29+-%3E+String+%7B%0A++++let+mut+rng+%3D+rand%3A%3Arng%28%29%3B%0A++++let+use_two+%3D+random%28%29%3B+%2F%2F+Hey+it%27s+a+bool+generator+into+an+if+else+statement%2C+the+bool+is+the+condition+-+if+true%2C+the+name+will+be+two+words+concatenated%0A++++let+first_name+%3D+if+use_two+%7B%0A++++format%21%28%0A++++++++%22%7B%7D%7B%7D%22%2C%0A++++++++capitalize%28FIRST_PARTS_ONE.choose%28%26mut+rng%29.unwrap%28%29%29%2C+%2F%2Fpassing+the+first+section+to+the+capitalization+function.%0A++++++++FIRST_PARTS_TWO.choose%28%26mut+rng%29.unwrap%28%29%29%0A++++%7D+else+%7B%0A++++++++capitalize%28FORNAME_SINGLE.choose%28%26mut+rng%29.unwrap%28%29%29%0A++++%7D%3B%0A++++%2F%2FAnd+again+lets+set+it+to+random+if+it%27s+one+or+two+words+concatenated+to+a+surname%0A++++let+use_two+%3D+random%28%29%3B%0A++++let+last_name+%3D+if+use_two+%7B%0A++++format%21%28%0A++++++++%22%7B%7D%7B%7D%22%2C%0A++++++++capitalize%28LAST_PARTS_ONE.choose%28%26mut+rng%29.unwrap%28%29%29%2C%0A++++++++LAST_PARTS_TWO.choose%28%26mut+rng%29.unwrap%28%29%29%0A++++%7D+else+%7B%0A+++++++capitalize%28SURNAME_SINGLE.choose%28%26mut+rng%29.unwrap%28%29%29%0A++++%7D%3B%0A++++%2F%2FFinally%2C+we+now+add+the+two+chosen%2Fconstructed+names+to+the+final+name+combining+the+first+and+last+name.%0A++++format%21%28%22%7B%7D+%7B%7D%22%2C+first_name%2C+last_name%29%0A%7D%0A%0A++++%2F%2FMy+wonky+capitalizer+function+that+I+keep+running+into+borrowing+string+type+headaches%0Afn+capitalize%28s%3A+%26str%29+-%3E+String+%7B%0A++++if+s.is_empty%28%29+%7B%0A++++++++return+s.to_string%28%29%3B%0A++++%7D%0A++++let+mut+chars+%3D+s.chars%28%29%3B%0A++++let+first_char+%3D+chars.next%28%29.unwrap%28%29%3B+%2F%2FBasically%2C+it+splits+off+the+first+character%2C+capitalizes+it%2C+and+then+reassembles+it.%0A++++let+capitalized_first%3A+String+%3D+first_char.to_uppercase%28%29.collect%28%29%3B%0A++++let+rest%3A+String+%3D+chars.collect%28%29%3B%0A++++format%21%28%22%7B%7D%7B%7D%22%2C+capitalized_first%2C+rest%29%0A%7D%0A%0Afn+main%28%29+%7B%0A++++for+_+in+00..5%7B+%2F%2F+Nesting+our+result+in+a+loop+*+5+so+we+can+see+a+few+variants%0A++++++++%2F%2FNow+we+call+the+name+%28generate_name%29+function+and+then+print+the+results%21%0A++++++++let+name+%3D+generate_name%28%29%3B%0A++++++++println%21%28%22%7B%7D%22%2C+name%29%3B%0A++++%7D%0A%7D" height="650" width="600" title="Rust Compound Names"></iframe> 
{% endtab %}

{% tab ExamplesTwo Rust Super Advanced Surnames%}

```rust

use rand::random;
use rand::distr::weighted::WeightedIndex;
use rand::prelude::*;

/// It's so gender, lets break names into general gendered understanding since that might be useful for people generation later?
#[derive(Clone, Copy)]
enum Gender {
    Male,
    Female,
    Nonbinary,
}

/// Last-name construction patterns, which is quite messy, but I tried to combine concatination with what might yield interesting and semisensemaking results
#[derive(Clone, Copy)]
enum LastNamePattern {
    AnimalOccupation,
    AnimalEnd,
    ColorAnimal,
    ColorEnd,
    ColorNoun,
    ColorOccupation,
    DescriptorAnimal,
    DescriptorNoun,
    DescriptorOccupation,
    SingleSurname,
}

/* -----------------------------
   Word Banks and Pools
-------------------------------- */

//First our gendery ones
const FIRST_MALE: &[&str] = &["alaric", "bram", "dorian", "douglas", "sebastián", "jasper", "marcelo", "draven", "leo", "dimitri", "jasper", "manuel", "kane", "thomas", "oliver",];
const FIRST_FEMALE: &[&str] = &["elara", "mira", "selene", "nyssa", "atstrid", "esther", "opal", "victoria", "zoe", "flora", "margret", "sloane", "yashira", "jing", "wendy",];
const FIRST_NONBINARY: &[&str] = &["rowan", "kai", "vale", "nico", "hunter", "skyler", "ash", "izzy", "riley", "quinn", "parker", "jordan", "blake", "taylor", "casey", "avery", "rory", "harper", "kim", "wren", "morgan", "addison", "robin",];
//Now our mess of last name construction
const COLORS: &[&str] = &["red", "black", "silver", "golden","blue", "green", "gold", "brass", "copper",];
const ANIMALS: &[&str] = &["wolf", "raven", "bear", "hart", "fox", "woolf", "ram", "bair", "lion", "dragon", "phenix", "man", "men",];
const OCCUPATIONS: &[&str] = &["hunter", "warden", "scholar", "miller", "fisher", "craft", "smith", "baker", "cook", "wright", "mason", "maker", "seamer", "booker", "wroughter",];
const DESCRIPTORS: &[&str] = &["deep", "dark", "light", "quick", "old", "love", "glad", "good", "new", "fast", "short", "tall", "big", "flight", "small",];
const NOUNS: &[&str] = &["foot", "thumb", "hand","moon", "devil", "rook", "bell", "thimble", "sword", "tale", "eye", "stone", "ivy", "song", "apple", "gate", "wood", "weather",];
const ENDS: &[&str] = &["ton", "seer", "well", "worth", "field", "lake", "win", "man", "dasher"];
//solo last names if that is chosen
const SURNAME_SINGLE: &[&str] = &["acuña", "aoki", "babbage", "blackwell", "conway", "eldridge", "erdős", "fazil", "fuller", "garcia", "harris", "kozuki", "lowell", "müller", "naccarato", "nzuyen","quinlan", "satō","tsai", "wagner", "zote",];

/* -----------------------------
   Pattern Weights For Surnames
-------------------------------- */

//The thought here is maybe we would want ceritain last names to types more likely manifest.
const LAST_NAME_PATTERNS: &[(LastNamePattern, u8)] = &[
    (LastNamePattern::ColorAnimal, 2),
    (LastNamePattern::AnimalOccupation, 3),
    (LastNamePattern::ColorOccupation, 2),
    (LastNamePattern::DescriptorAnimal, 2),
    (LastNamePattern::DescriptorOccupation, 2),
    (LastNamePattern::DescriptorNoun, 3),
    (LastNamePattern::ColorEnd, 2),
    (LastNamePattern::AnimalEnd, 3),
    (LastNamePattern::ColorNoun, 2),
    (LastNamePattern::SingleSurname, 6),
];

/* -----------------------------
   Random Helpers
-------------------------------- */

fn pick<'a>(rng: &mut impl Rng, pool: &'a [&str]) -> &'a str {
    pool.choose(rng).expect("pool must not be empty")
}

fn pick_distinct<'a>(
    rng: &mut impl Rng,
    pool: &'a [&str],
    not_this: &str,
) -> &'a str {
    loop {
        let choice = pick(rng, pool);
        if choice != not_this {
            return choice;
        }
    }
}

fn pick_last_name_pattern(rng: &mut impl Rng) -> LastNamePattern {
    let weights = LAST_NAME_PATTERNS.iter().map(|(_, w)| *w);
    let dist = WeightedIndex::new(weights).expect("invalid pattern weights");
    LAST_NAME_PATTERNS[dist.sample(rng)].0
}

/* -----------------------------
   Capitalization Functions
-------------------------------- */

fn capitalize(s: &str) -> String {
    let mut chars = s.chars();

    match chars.next() {
        None => String::new(),
        Some(first) => {
            let first = first.to_uppercase().collect::<String>();
            let rest = chars.as_str().to_lowercase();
            format!("{first}{rest}")
        }
    }
}

fn capitalize_full_name(name: &str) -> String {
    name.split_whitespace()
        .map(capitalize)
        .collect::<Vec<_>>()
        .join(" ")
}

/* -----------------------------
   Name Generation Proper
-------------------------------- */

fn pick_first_name<'a>(rng: &mut impl Rng, gender: Gender) -> &'a str {
    match gender {
        Gender::Male => pick(rng, FIRST_MALE),
        Gender::Female => pick(rng, FIRST_FEMALE),
        Gender::Nonbinary => pick(rng, FIRST_NONBINARY),
    }
}

fn generate_last_name(rng: &mut impl Rng) -> String {
    match pick_last_name_pattern(rng) {
        LastNamePattern::ColorAnimal => {
            let color = pick(rng, COLORS);
            let animal = pick_distinct(rng, ANIMALS, color);
            format!("{color}{animal}")
        }
        LastNamePattern::AnimalOccupation => {
            let animal = pick(rng, ANIMALS);
            let job = pick_distinct(rng, OCCUPATIONS, animal);
            format!("{animal}{job}")
        }
        LastNamePattern::ColorOccupation => {
            let color = pick(rng, COLORS);
            let job = pick_distinct(rng, OCCUPATIONS, color);
            format!("{color}{job}")
        }
        LastNamePattern::DescriptorAnimal => {
            let description = pick(rng, DESCRIPTORS);
            let animal = pick_distinct(rng, ANIMALS, description);
            format!("{description}{animal}")
        }
        LastNamePattern::DescriptorOccupation => {
            let description = pick(rng, DESCRIPTORS);
            let job = pick_distinct(rng, OCCUPATIONS, description);
            format!("{description}{job}")
        }
        LastNamePattern::ColorEnd => {
            let color = pick(rng, COLORS);
            let end = pick_distinct(rng, ENDS, color);
            format!("{color}{end}")
        }
        LastNamePattern::AnimalEnd => {
            let animal = pick(rng, ANIMALS);
            let end = pick_distinct(rng, ENDS, animal);
            format!("{animal}{end}")
        }
        LastNamePattern::DescriptorNoun => {
            let descriptor = pick(rng, DESCRIPTORS);
            let noun = pick_distinct(rng, NOUNS, descriptor);
            format!("{descriptor}{noun}")
        }
        LastNamePattern::ColorNoun => {
            let color = pick(rng, COLORS);
            let noun = pick_distinct(rng, NOUNS, color);
            format!("{color}{noun}")
        }
        LastNamePattern::SingleSurname => {
            let fact = random();
            let surname = if fact {
                pick(rng, SURNAME_SINGLE)
            } else {
                pick(rng, OCCUPATIONS)
            };
            format!("{surname}")
        }
    }
}

fn generate_name(rng: &mut impl Rng, gender: Gender) -> String {
    let first = pick_first_name(rng, gender);
    let last = generate_last_name(rng);
    capitalize_full_name(&format!("{first} {last}"))
}

/* -----------------------------
   Main Function
-------------------------------- */

fn main() {
    let mut rng = rand::rng();

    for _ in 0..10 {
        //We'll do kind of a homemade weighted result with a three in seven chance for a nonbinary name and two in seven for binary names
        let gender = match rand::random_range(0..7) {
            1|2 => Gender::Male,
            3|4 => Gender::Female,
            _ => Gender::Nonbinary,
        };

        let name = generate_name(&mut rng, gender);
        println!("{name}");
    }
}

```

{% endtab %}

{% tab ExamplesTwo Super Advanced Code Player%}
<iframe src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=e8129eda65d198ce1250fe78192b7931" height="650" width="600" title="Rust Super Advanced Surnames Code Player"></iframe> 
{% endtab %}

{% endtabs %}

{% enddetails %}

#### Fine Tuning Robustness & Optimisation 
Make some adjustments, quantize that bias.

Let's improve this and muddle as well as we provide a plethora, or as my one of my favorite wonky mathematicians, to hear stories of Paul Erdős would say "copious quantities", which we tried to implement in part by including his surname for our data set so now our little monster can get to work generating many names of a more unique nature.

Heck, those who dabble in programming have many inside jokes about the challenges of naming conventions, especially when creating their variables.
Its true names are powerful; an honorific like doctor or man of science calls for an elevated position of gained skill and knowledge. An epithet like of the queen's jeweled dagger or her of a thousand screams throws the weight of association behind the individual.

<aside><p>My brain is open - Paul Erdős</p></aside>

Here are some of my favorite results so far:
	Doctor Wren Fastthimble the Seamer
	Man of Science Zulo Ramcraft
	Jing Olddevil of the Obsidian Oath
	Viscountum Nico Lovedevil
	Selene Silverdragon, terrible cook


Long name with honorifics and double epithets:
**Madam Wendy Redbells the Dark Tyrant of the Deep Mauw, Adept of the Queens Shadow**

| Honorific | Firstname | Surname1 | Surname2 | Filler | Descriptor | Reputation | Filler | Descriptor | Place | Class | Filler | Leader | Noun   |
| --------- | --------- | -------- | -------- | ------ | ---------- | ---------- | ------ | ---------- | ----- | ----- | ------ | ------ | ------ |
| Madam     | Wendy     | Red      | bells    | the    | Dark       | Tyrant     | of the | Deep       | Mauw  | Adept | of the | Queens | Shadow |

But naturally, that becomes a bit cumberson, so usually you want these styles of names less often to limit impact of name fatigue. But it could be a fun aspect ot a player character keepign track of titles, earned through biome and action reconition.

{% details More Advanced Code Examples%}
{% tabs ExamplesThree %}
{% tab ExamplesThree Honorifics & Epiphets %}

```rust
use rand::random;
use rand::distr::weighted::WeightedIndex;
use rand::prelude::*;

/// It's so gender, lets break names into general gendered understanding since that might be useful for people generation later?
#[derive(Clone, Copy)]
enum Gender {
    Male,
    Female,
    Nonbinary,
}

/// Last-name construction patterns, which is quite messy, but I tried to combine concatination with what might yield interesting and semisensemaking results
#[derive(Clone, Copy)]
enum LastNamePattern {
    AnimalOccupation,
    AnimalEnd,
    ColorAnimal,
    ColorEnd,
    ColorNoun,
    ColorOccupation,
    DescriptorAnimal,
    DescriptorNoun,
    DescriptorOccupation,
    SingleSurname,
}

/// Epithet construction patterns for interesting titles
#[derive(Clone, Copy)]
enum EpithetPattern {
    TheDescriptor,
    TheAnimal,
    TheOccupation,
    OfTheNoun,
    NounOfThePlace,
    DescriptorOccupation,
    NounOfTheSociety,
    OfTheSociety,
}

/// Society name construction patterns
#[derive(Clone, Copy)]
enum SocietyPattern {
    ColorNoun,
    DescriptorNoun,
    NounOfNoun,
    TypeOfTheNoun,
    TypeOfDescriptor,
}

/* -----------------------------
   Word Banks and Pools
-------------------------------- */

//First our gendery ones
const FIRST_MALE: &[&str] = &["alaric", "bram", "dorian", "douglas", "sebastián", "jasper", "marcelo", "draven", "leo", "dimitri", "jasper", "manuel", "kane", "thomas", "oliver", "casper", "paco", "witi", "quentin", "basil", "broderick", "gregory", "maxwell", "cailean", "zulo", "zachery",];
const FIRST_FEMALE: &[&str] = &["elara", "mira", "selene", "nyssa", "atstrid", "esther", "opal", "victoria", "zoe", "flora", "margret", "sloane", "yashira", "jing", "wendy","octavia", "vivian", "xiu", "yingyue", "catherine", "eleanor", "margot", "ada", "sibyl", "elspeth",];
const FIRST_NONBINARY: &[&str] = &["rowan", "kai", "vale", "nico", "hunter", "skyler", "ash", "izzy", "riley", "quinn", "parker", "jordan", "blake", "taylor", "casey", "avery", "rory", "harper", "kim", "wren", "morgan", "addison", "robin", "zepher", "gene", "clark", "curi",];

//Honorifics by gender
const HONORIFIC_MALE: &[&str] = &["Sir", "Lord", "Master", "Baron", "Baronet", "Count", "Viscount", "Duke", "Prince", "Priest", "Marquess", "King", "Emperor", "Professor", "Man of Science", "Doctor", "Captain",];
const HONORIFIC_FEMALE: &[&str] = &["Miss", "Lady", "Mistress", "Baroness", "Baronetess", "Countess", "Viscountess", "Duchess", "Princess", "Priestess", "Marchioness","Queen","Empress", "Professor", "Scientist", "Doctor", "Captain",];
const HONORIFIC_NONBINARY: &[&str] = &["Mx.", "Laird", "Mastrum ", "Barum", "Baronetum", "Countum", "Viscountum", "Duchum", "Princem", "Priestex", "Marquem", "Sov", "Emperum", "Professor", "Scientist", "Doctor", "Captain",];

//Now our mess of last name construction
const COLORS: &[&str] = &["red", "black", "silver", "golden", "blue", "green", "gold", "brass", "copper",];
const ANIMALS: &[&str] = &["wolf", "raven", "bear", "hart", "fox", "woolf", "ram", "bair", "lion", "dragon", "phenix", "man", "men", "crane",];
const OCCUPATIONS: &[&str] = &["hunter", "warden", "scholar", "miller", "fisher", "craft", "smith", "baker", "cook", "wright", "mason", "maker", "seamer", "booker", "wroughter",];
const DESCRIPTORS: &[&str] = &["deep", "dark", "light", "quick", "old", "love", "glad", "good", "new", "fast", "short", "tall", "big", "flight", "small",];
const NOUNS: &[&str] = &["foot", "thumb", "hand","moon", "devil", "rook", "bell", "thimble", "sword", "tale", "eye", "stone", "ivy", "song", "apple", "gate", "wood", "weather",];
const ENDS: &[&str] = &["ton", "seer", "well", "worth", "field", "lake", "win", "man", "dasher"];

//Additional word banks for epithets
const EPITHET_DESCRIPTORS: &[&str] = &["Brave", "Wise", "Bold", "Swift", "Fierce", "Gentle", "Cunning", "Strong", "Silent", "Wild", "Calm", "Proud", "Just", "Fair", "True", "Great", "jocular", "terrible", "dim", "horror", "tyrant", "aweful", "devourer", "dancing", "jewel", "enforcer", "butcher",];
const EPITHET_PLACES: &[&str] = &["North", "South", "East", "West", "Mountain", "Valley", "Sea", "Forest", "Plains", "Moor", "Marsh", "Highlands", "Wastes", "depths", "hollow", "gulch", "ravine", "tundra",];
const EPITHET_NOUNS: &[&str] = &["sword", "light", "axe", "knife", "dagger", "shield", "rook", "spider", "flower", "rose", "demon", "falcon", "champion",];

//metals: copper, gold, silver, nickel, steel, brass, bronse, peuter, platnum, iron, lead, alluminum
//stone: dimond, saphire, onyx, ruby, topaz, amber, amathyst, obscidian
// sword of the south, the dancing axe, brave light of the north, the vizard wizard

//Word banks for generating secret societies and guilds
const SOCIETY_TYPES: &[&str] = &["Guild", "Order", "Society", "Circle", "Council", "Brotherhood", "Fellowship", "League", "Covenant", "Assembly", "Syndicate", "Fraternity", "College", "Confraternity", "Union", "Company", "Sisterhood", "Conclave"];
const SOCIETY_NOUNS: &[&str] = &["Compass", "Archive", "Chain", "Eye", "Stars", "Threshold", "Shadows", "Dawn", "Echoes", "Mirrors", "Word", "Embers", "Ravens", "Path", "Thorns", "Door", "Flame", "Veil", "Seal", "Crown", "Key", "Tower", "Scroll", "Oath"];
const SOCIETY_DESCRIPTORS: &[&str] = &["Hidden", "Veiled", "Sealed", "Broken", "Endless", "Silent", "Ancient", "Crimson", "Azure", "Obsidian", "Silver", "Golden", "Eternal", "Forgotten", "Sacred", "Secret"];


//solo last names if that is chosen
const SURNAME_SINGLE: &[&str] = &["acuña", "aoki", "babbage", "blackwell", "conway", "eldridge", "erdős", "fazil", "fuller", "garcia", "harris", "kozuki", "lowell", "müller", "naccarato", "nzuyen","quinlan", "satō","tsai", "wagner", "zote",];

/* -----------------------------
   Pattern Weights For Surnames
-------------------------------- */

//The thought here is maybe we would want ceritain last names to types more likely manifest.
const LAST_NAME_PATTERNS: &[(LastNamePattern, u8)] = &[
    (LastNamePattern::ColorAnimal, 2),
    (LastNamePattern::AnimalOccupation, 3),
    (LastNamePattern::ColorOccupation, 2),
    (LastNamePattern::DescriptorAnimal, 2),
    (LastNamePattern::DescriptorOccupation, 2),
    (LastNamePattern::DescriptorNoun, 3),
    (LastNamePattern::ColorEnd, 2),
    (LastNamePattern::AnimalEnd, 3),
    (LastNamePattern::ColorNoun, 2),
    (LastNamePattern::SingleSurname, 6),
];

//Pattern weights for epithets
const EPITHET_PATTERNS: &[(EpithetPattern, u8)] = &[
    (EpithetPattern::TheDescriptor, 4),
    (EpithetPattern::TheAnimal, 2),
    (EpithetPattern::TheOccupation, 2),
    (EpithetPattern::OfTheNoun, 3),
    (EpithetPattern::NounOfThePlace, 3),
    (EpithetPattern::DescriptorOccupation, 2),
    (EpithetPattern::NounOfTheSociety, 3),
    (EpithetPattern::OfTheSociety, 3),
];

//Pattern weights for society name generation
const SOCIETY_PATTERNS: &[(SocietyPattern, u8)] = &[
    (SocietyPattern::ColorNoun, 3),
    (SocietyPattern::DescriptorNoun, 3),
    (SocietyPattern::NounOfNoun, 2),
    (SocietyPattern::TypeOfTheNoun, 4),
    (SocietyPattern::TypeOfDescriptor, 2),
];

/* -----------------------------
   Random Helpers
-------------------------------- */

fn pick<'a>(rng: &mut impl Rng, pool: &'a [&str]) -> &'a str {
    pool.choose(rng).expect("pool must not be empty")
}

fn pick_distinct<'a>(
    rng: &mut impl Rng,
    pool: &'a [&str],
    not_this: &str,
) -> &'a str {
    loop {
        let choice = pick(rng, pool);
        if choice != not_this {
            return choice;
        }
    }
}

fn pick_last_name_pattern(rng: &mut impl Rng) -> LastNamePattern {
    let weights = LAST_NAME_PATTERNS.iter().map(|(_, w)| *w);
    let dist = WeightedIndex::new(weights).expect("invalid pattern weights");
    LAST_NAME_PATTERNS[dist.sample(rng)].0
}

fn pick_epithet_pattern(rng: &mut impl Rng) -> EpithetPattern {
    let weights = EPITHET_PATTERNS.iter().map(|(_, w)| *w);
    let dist = WeightedIndex::new(weights).expect("invalid epithet pattern weights");
    EPITHET_PATTERNS[dist.sample(rng)].0
}

fn pick_society_pattern(rng: &mut impl Rng) -> SocietyPattern {
    let weights = SOCIETY_PATTERNS.iter().map(|(_, w)| *w);
    let dist = WeightedIndex::new(weights).expect("invalid society pattern weights");
    SOCIETY_PATTERNS[dist.sample(rng)].0
}

/* -----------------------------
   Capitalization Functions
-------------------------------- */

fn capitalize(s: &str) -> String {
    let mut chars = s.chars();

    match chars.next() {
        None => String::new(),
        Some(first) => {
            let first = first.to_uppercase().collect::<String>();
            let rest = chars.as_str().to_lowercase();
            format!("{first}{rest}")
        }
    }
}

fn capitalize_full_name(name: &str) -> String {
    name.split_whitespace()
        .map(capitalize)
        .collect::<Vec<_>>()
        .join(" ")
}

/* -----------------------------
   Name Generation Proper
-------------------------------- */

fn pick_first_name<'a>(rng: &mut impl Rng, gender: Gender) -> &'a str {
    match gender {
        Gender::Male => pick(rng, FIRST_MALE),
        Gender::Female => pick(rng, FIRST_FEMALE),
        Gender::Nonbinary => pick(rng, FIRST_NONBINARY),
    }
}

fn pick_honorific(rng: &mut impl Rng, gender: Gender) -> &str {
    match gender {
        Gender::Male => pick(rng, HONORIFIC_MALE),
        Gender::Female => pick(rng, HONORIFIC_FEMALE),
        Gender::Nonbinary => pick(rng, HONORIFIC_NONBINARY),
    }
}

fn generate_society_name(rng: &mut impl Rng) -> String {
    match pick_society_pattern(rng) {
        SocietyPattern::ColorNoun => {
            let color = pick(rng, COLORS);
            let noun = pick_distinct(rng, SOCIETY_NOUNS, color);
            format!("{} {}", capitalize(color), capitalize(noun))
        }
        SocietyPattern::DescriptorNoun => {
            let descriptor = pick(rng, SOCIETY_DESCRIPTORS);
            let noun = pick_distinct(rng, SOCIETY_NOUNS, descriptor);
            format!("{descriptor} {}", capitalize(noun))
        }
        SocietyPattern::NounOfNoun => {
            let noun1 = pick(rng, SOCIETY_NOUNS);
            let noun2 = pick_distinct(rng, SOCIETY_NOUNS, noun1);
            format!("{} of {}", capitalize(noun1), capitalize(noun2))
        }
        SocietyPattern::TypeOfTheNoun => {
            let society_type = pick(rng, SOCIETY_TYPES);
            let noun = pick(rng, SOCIETY_NOUNS);
            format!("{society_type} of the {}", capitalize(noun))
        }
        SocietyPattern::TypeOfDescriptor => {
            let society_type = pick(rng, SOCIETY_TYPES);
            let descriptor = pick(rng, SOCIETY_DESCRIPTORS);
            format!("{society_type} of the {descriptor}")
        }
    }
}

fn generate_epithet(rng: &mut impl Rng) -> String {
    match pick_epithet_pattern(rng) {
        EpithetPattern::TheDescriptor => {
            let descriptor = pick(rng, EPITHET_DESCRIPTORS);
            format!("the {}", capitalize(descriptor))
        }
        EpithetPattern::TheAnimal => {
            let animal = pick(rng, ANIMALS);
            format!("the {}", capitalize(animal))
        }
        EpithetPattern::TheOccupation => {
            let occupation = pick(rng, OCCUPATIONS);
            format!("the {}", capitalize(occupation))
        }
        EpithetPattern::OfTheNoun => {
            let place = pick(rng, EPITHET_PLACES);
            format!("of the {place}")
        }
        EpithetPattern::NounOfThePlace => {
            let noun = pick(rng, EPITHET_NOUNS);
            let place = pick(rng, EPITHET_PLACES);
            format!("{} of the {}", capitalize(noun), capitalize(place))
        }
        EpithetPattern::DescriptorOccupation => {
            let descriptor = pick(rng, EPITHET_DESCRIPTORS);
            let occupation = pick(rng, OCCUPATIONS);
            format!("{descriptor} {}", capitalize(occupation))
        }
        EpithetPattern::NounOfTheSociety => {
            let noun = pick(rng, EPITHET_NOUNS);
            let society = generate_society_name(rng);
            format!("{} of the {society}", capitalize(noun))
        }
        EpithetPattern::OfTheSociety => {
            let society = generate_society_name(rng);
            format!("of the {society}")
        }
    }
}

fn generate_last_name(rng: &mut impl Rng) -> String {
    match pick_last_name_pattern(rng) {
        LastNamePattern::ColorAnimal => {
            let color = pick(rng, COLORS);
            let animal = pick_distinct(rng, ANIMALS, color);
            format!("{color}{animal}")
        }
        LastNamePattern::AnimalOccupation => {
            let animal = pick(rng, ANIMALS);
            let job = pick_distinct(rng, OCCUPATIONS, animal);
            format!("{animal}{job}")
        }
        LastNamePattern::ColorOccupation => {
            let color = pick(rng, COLORS);
            let job = pick_distinct(rng, OCCUPATIONS, color);
            format!("{color}{job}")
        }
        LastNamePattern::DescriptorAnimal => {
            let description = pick(rng, DESCRIPTORS);
            let animal = pick_distinct(rng, ANIMALS, description);
            format!("{description}{animal}")
        }
        LastNamePattern::DescriptorOccupation => {
            let description = pick(rng, DESCRIPTORS);
            let job = pick_distinct(rng, OCCUPATIONS, description);
            format!("{description}{job}")
        }
        LastNamePattern::ColorEnd => {
            let color = pick(rng, COLORS);
            let end = pick_distinct(rng, ENDS, color);
            format!("{color}{end}")
        }
        LastNamePattern::AnimalEnd => {
            let animal = pick(rng, ANIMALS);
            let end = pick_distinct(rng, ENDS, animal);
            format!("{animal}{end}")
        }
        LastNamePattern::DescriptorNoun => {
            let descriptor = pick(rng, DESCRIPTORS);
            let noun = pick_distinct(rng, NOUNS, descriptor);
            format!("{descriptor}{noun}")
        }
        LastNamePattern::ColorNoun => {
            let color = pick(rng, COLORS);
            let noun = pick_distinct(rng, NOUNS, color);
            format!("{color}{noun}")
        }
        LastNamePattern::SingleSurname => {
            let fact = random();
            let surname = if fact {
                pick(rng, SURNAME_SINGLE)
            } else {
                pick(rng, OCCUPATIONS)
            };
            format!("{surname}")
        }
    }
}

fn generate_name(rng: &mut impl Rng, gender: Gender) -> String {
    let first = pick_first_name(rng, gender);
    let last = generate_last_name(rng);
    let mut name = capitalize_full_name(&format!("{first} {last}"));
    
    // 25% chance for honorific
    if rng.random_bool(0.25) {
        let honorific = pick_honorific(rng, gender);
        name = format!("{honorific} {name}");
    }
    
    // 25% chance for epithet
    if rng.random_bool(0.25) {
        let epithet = generate_epithet(rng);
        name = format!("{name} {epithet}");
    }
    
    name
}

/* -----------------------------
   Main Function
-------------------------------- */

fn main() {
    let mut rng = rand::rng();

    for _ in 0..10 {
        //We'll do kind of a homemade weighted result with a three in seven chance for a nonbinary name and two in seven for binary names
        let gender = match rand::random_range(0..6) {
            1|2 => Gender::Male,
            3|4 => Gender::Female,
            _ => Gender::Nonbinary,
        };

        let name = generate_name(&mut rng, gender);
        println!("{name}");
    }
}
```

{% endtab %}
{% tab ExamplesThree Honorifics & Epithets Code Player %}
Here we've added a 25% chance for a name to generate an epithet and or honorific.

<iframe src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=3e2bc4f8ceaabc76fe41c1908a00b7d9" height="650" width="600" title="Honorifics & Epithets Code Player"></iframe>

{% endtab %}
{% endtabs %}
{% enddetails %}




## Conclusion

### Key Insights and Improvements to Impliment

#### Improvements to Implement
How can we continue to improve to what we want, perhaps any further challenges we would like to overcome?

I suppose we could head deeper into this system, building out some hypocorisms based on the forenames or their surname attributes, or just general diminutive familiar pet names for when relevant other NPCs refer to others whom they are familiar with.

Hopefully, you see the use, whether for interest or fun, TTRPG or coded game. I'll leave with one more follow-up. Which means we can easily expand this to group names, societies, cults, & orders.

If you are looking for a secret society or a guild of specialists, we can easily reformat this to something more open.

* Group + entity 
* description + group
* group + description + entity
* description + group + description entity
and continued expansions adding places and other previously generated titles of kings and queens, like *shadow sisters of the dark realm order of the silver king of terror*, or * sacred librarians of the bookish order*, or * followers of the radiant Sentient Bell*.

For a group of militants or bandits, we can use a name

The Silent Daggers, Princess Phoebe's Priestesses, The Lost Helm, The Snapdragon Knights, Lord Edwins Axe, Cauldron Fatecasters, Acorn Foxes of the Forrest. You could then craft Geraldina of the Cauldron Fatecasters. Rachel, resident witch of the Snapdragon Knights. Adrienne Gold Vixen, most cunning of the Acorn Foxes - yes, those ones of the forest. And so forth - ¯\ (o_0)/¯

Lastly, another improvement is that epithets are more often awarded and given rather than chosen. We could generate some sort of global stats to keep track of kill counts, type, travel, and more to give an update on the names of NPCs, things, and the player, depending on their actions. What's more, names tend to be somewhat geographic in the sense that certain names carry more weight in certain companies. We could link the given names from deeds/atrocities of a given biome or a group of beings, for example, you may be known as the conquer of the frozen depths, really, to the town on the edge of the frozen depths, the desert oasis town of Hotsville probably has never heard of such noble actions.

While, from an individual standpoint, a scholar who travels and researches may have more of a chance to know you since they keep up with current events, just like a slime colony may have a name for you just for their own culture, since you keep slaying slimes. So a code system that might cross-reference those two level of epistemologies would results in an interesting recognition and perhaps furthermore a rumor system and even adjust names of being items through actions/use -check out my stats and attributes post where we give swords names and Trog the goblin becomes known for his legendary soup after he sells it 1000 times.
But that's a ramble for another day.

with ludonarrative love, <br>
Alix


