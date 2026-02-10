---
layout: distill
title: Procedural Generation of Text Part One names
description: procedural generation of names and epithets
tags: procedural-generation game-studies ludonarrative rust inform7
categories: Game-Design
date: 2026-02-02
featured: true
mermaid:
  enabled: true
  zoomable: true
citation: true
tabs: true

# The only thing needed is for you to set the `citation` key in the front matter to `true` Probably need to move it to the bottom or perhaps a button?

bibliography: 2018-12-22-distill.bib 

#   - make sure that TOC names match the actual section names
#     for hyperlinks within the post to work correctly.
toc:
  - name: Basics
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: Citations
  - name: Footnotes
  - name: Code Blocks
  - name: Mermaid
  - name: Layouts
  - name: Other Typography?
  - name: Conclusion

# Below is an example of injecting additional post-specific styles.
# If you use this post as a template, delete this _styles block.
---

## Basics

Delivering a <a href="https://en.wikipedia.org/wiki/Cold-pressed_juice">cold-pressed</a> hyperlink in a sentence.

#### Quote

> We do not grow absolutely, chronologically. We grow sometimes in one dimension, and not in another, unevenly. We grow partially. We are relative. We are mature in one realm, childish in another.
> —Anais Nin

In truth we are non homogeneous beings in all aspects and temporal elements, why do we veiw things in binary why do we act so?

>  Oh, you can _put_ **Markdown** into a blockquote too.


#### Emphasize Tag

The emphasize tag should _italicize_ text.

#### Insert Tag

This tag should denote <ins>inserted</ins> text.

#### Keyboard Tag

This scarcely known tag emulates <kbd>keyboard text</kbd>, which is usually styled like the `<code>` tag.


#### Anchor Tag (aka. Link)

This is an example of a [link](http://github.com "GitHub").

#### Abbreviation Tag

The abbreviation CSS stands for "Cascading Style Sheets".

*[CSS]: Cascading Style Sheets


#### Quote Tag

<q>Developers, developers, developers&#8230;</q> &#8211;Steve Ballmer


#### Strong Tag

This tag shows **bold text**.

#### Buttons

Make any link standout more when applying the `.btn` class. `cool.btn`
[Link button](https://just-the-docs.com){: .btn }

---
## Citations

Citations are then used in the article body with the `<d-cite>` tag.
The key attribute is a reference to the id provided in the bibliography.
The key attribute can take multiple ids, separated by commas.

The citation is presented inline like this: <d-cite key="gregor2015draw"></d-cite> (a number that displays more information on hover).
If you have an appendix, a bibliography is automatically created and populated in it.

Distill chose a numerical inline citation style to improve readability of citation dense articles and because many of the benefits of longer citations are obviated by displaying more information on hover.
However, we consider it good style to mention author last names if you discuss something at length and it fits into the flow well — the authors are human and it’s nice for them to have the community associate them with their work.

"Code is poetry." ---<cite>Automattic</cite>

---

## Footnotes

Just wrap the text you would like to show up in a footnote in a `<d-footnote>` tag.
The number of the footnote will be automatically generated.<d-footnote>This will become a hoverable footnote.That you can fill with relevence.</d-footnote>

---

## Mermaid

Similarly, you can also use it to create beautiful class diagrams:


It will be presented as:

```mermaid
classDiagram
    Dataset --|> Selection
    Color Name <|-- Selection

    class Dataset{
        Pigement
        Descriptor - Visual
        Descriptor - Abstract
        Noun
    }

    class Selection{
      Choose 2 -to- all options available to construct name
      (e.g.) pigment (blue), visual (deep), abstract (humorious), noun (sea) 

    }

    class Color Name{
      Concatinated final results ()
      i.e.: deep blue, humorious blue, 
      deep humorious blue, deep blue sea, 
      humorious blue sea, humorious sea, etc.
    }
```

A quick diagram on how we might construct a paint namer.
---


## Sidenotes

Distill supports sidenotes, which are like footnotes but placed in the margin of the page.
They are useful for providing additional context or references without interrupting the flow of the main text.

There are two main ways to create a sidenote:

**Using the `<aside>` tag:**

The following code creates a sidenote with **_distill's styling_** in the margin:

```html
<aside><p>This is a sidenote using aside tag.</p></aside>
```

<aside><p> This is a sidenote using `&lt;aside&gt;` tag</p> </aside>

We can also add images to sidenotes (click on the image to zoom in for a larger version):
{% raw %}

```html
<aside>
  {% include figure.liquid loading="eager" path="assets/img/rhino.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  <p>
    F.J. Cole, “The History of Albrecht Dürer’s Rhinoceros in Zoological Literature,” Science, Medicine, and History: Essays on the Evolution of
    Scientific Thought and Medical Practice (London, 1953), ed. E. Ashworth Underwood, 337-356. From page 71 of Edward Tufte’s Visual Explanations.
  </p>
</aside>
```

{% endraw %}

<aside>
  {% include figure.liquid loading="eager" path="assets/img/rhino.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  <p>F.J. Cole, “The History of Albrecht Dürer’s Rhinoceros in Zoological Literature,” Science, Medicine, and History: Essays on the Evolution of Scientific Thought and Medical Practice (London, 1953), ed. E. Ashworth Underwood, 337-356. From page 71 of Edward Tufte’s Visual Explanations.</p>
   <p>This principle is defined by Einstein's famous equation: $E = mc^2$ <a href="https://en.wikipedia.org/wiki/Mass%E2%80%93energy_equivalence" target="_blank">(Source: Wikipedia)</a></p>
</aside>


## Other Typography?


[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com


Inline `code` has `back-ticks around` it.


# Lets do Tabs with this to be extra cool!
But we are also putting the code in a details drop down!

{% details Click here to look at and run code%}

{% tabs ExampleOne %}
{% tab ExampleOne Rust %}
```rust
//Importing the rand crate to give us easy access to random function macros.
use rand::prelude::*;

//Creating some name arrays of data to pull from to create our random names 16x16
const FORNAMES: &[&str] = &[
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
    let namez = format!("{} {}", capitalize(FORNAMES.choose(&mut rng).unwrap()), capitalize(SURNAMES.choose(&mut rng).unwrap()));
    println!("{namez}");
    }
}
```

{% endtab %}
{% tab ExampleOne codeplayer %}
<iframe src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&code=%0A%2F%2FImporting+the+rand+crate+to+give+us+easy+access+to+random+function+macros.%0Ause+rand%3A%3Aprelude%3A%3A*%3B%0A%0A%2F%2FCreating+some+name+arrays+of+data+to+pull+from+to+create+our+random+names+16x16%0Aconst+FORNAMES%3A+%26%5B%26str%5D+%3D+%26%5B%0A++++%22atstrid%22%2C%0A++++%22douglas%22%2C%0A++++%22elizabeth%22%2C%0A++++%22ellen%22%2C%0A++++%22esther%22%2C%0A++++%22henry%22%2C%0A++++%22mark%22%2C%0A++++%22mary%22%2C%0A++++%22mia%22%2C%0A++++%22nico%22%2C%0A++++%22opal%22%2C%0A++++%22raki%22%2C%0A++++%22sebasti%C3%A1n%22%2C%0A++++%22thom%22%2C%0A++++%22victoria%22%2C%0A++++%22wendy%22%2C%0A%5D%3B%0A%0Aconst+SURNAMES%3A+%26%5B%26str%5D+%3D+%26%5B%0A++++%22appleton%22%2C%0A++++%22azarov%22%2C%0A++++%22babbage%22%2C%0A++++%22blackwell%22%2C%0A++++%22bloom%22%2C%0A++++%22button%22%2C%0A++++%22conway%22%2C%0A++++%22devi%22%2C%0A++++%22garcia%22%2C%0A++++%22harris%22%2C%0A++++%22kozuki%22%2C%0A++++%22lowell%22%2C%0A++++%22m%C3%BCller%22%2C%0A++++%22quinlan%22%2C%0A++++%22sat%C5%8D%22%2C%0A++++%22thimble%22%2C%0A%5D%3B%0A%0A++++%2F%2FIt%27s+strangly+obtuse+to+capitalize+the+first+letter+of+a+string+in+Rust%2C+we+have+to+break+it+apart+and+then+reconcatinate+it+so+heres+a+function+to+do+just+that%0Afn+capitalize%28s%3A+%26str%29+-%3E+String+%7B%0A++++if+s.is_empty%28%29+%7B%0A++++++++return+s.to_string%28%29%3B%0A++++%7D%0A++++let+mut+chars+%3D+s.chars%28%29%3B%0A++++let+first_char+%3D+chars.next%28%29.unwrap%28%29%3B%0A++++let+capitalized_first%3A+String+%3D+first_char.to_uppercase%28%29.collect%28%29%3B%0A++++let+rest%3A+String+%3D+chars.collect%28%29%3B%0A++++format%21%28%22%7B%7D%7B%7D%22%2C+capitalized_first%2C+rest%29%0A%7D%0A%0A%2F%2FHere%27s+our+main+function%0Afn+main%28%29+%7B%0A++++let+mut+rng+%3D+rand%3A%3Arng%28%29%3B%0A++++++++%2F%2FLoop+the+code+5+times+so+we+can+get+five+different+results%0A++++for+_i+in+0..5%0A++++%7B+%0A++++++++%2F%2F+added+the+capitalize+to+surname.+It+seems+you+encapsulate+a+into+other+functions%2C+not+sure+how+to+do+that+with+external+code+referencesationthe+%0A++++let+namez+%3D+format%21%28%22%7B%7D+%7B%7D%22%2C+capitalize%28FORNAMES.choose%28%26mut+rng%29.unwrap%28%29%29%2C+capitalize%28SURNAMES.choose%28%26mut+rng%29.unwrap%28%29%29%29%3B%0A++++println%21%28%22%7Bnamez%7D%22%29%3B%0A++++%7D%0A%7D" height="600" width="550" title="Rust Basic Names"></iframe> 

{% endtab %}

{% endtabs %}


{% enddetails %}


Here is the web player of the rust code in action that you can run yourselfs!
 
## Another example


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
<iframe src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&code=%2F%2FFirst%2C+let%27s+import+rand+because+we+are+going+to+be+using+a+lot+of+random+choice+selection+and+bool+generation%0Ause+rand%3A%3Aprelude%3A%3A*%3B%0Ause+rand%3A%3Arandom%3B%0A%0A%2F%2FI+have+made+a+few+constant+arrays+to+store+a+few+different+word+pools%2C+the+first+of+which+is+an+awkward+attempt+to+make+a+simple+concatenating+forename+generator%0Aconst+FIRST_PARTS_ONE%3A+%26%5B%26str%5D+%3D+%26%5B%22bright%22%2C+%22rach%22%2C+%22mary%22%2C+%22wet%22%2C+%22shel%22%2C+%22dear%22%2C+%22alk%22%2C+%22er%22%2C+%22sher%22%2C+%22zor%22%5D%3B%0Aconst+FIRST_PARTS_TWO%3A+%26%5B%26str%5D+%3D+%26%5B%22ton%22%2C+%22al%22%2C+%22es%22%2C+%22son%22%2C+%22ler%22%2C+%22win%22%5D%3B%0A%0Aconst+LAST_PARTS_ONE%3A+%26%5B%26str%5D+%3D+%26%5B%22willow%22%2C+%22bloom%22%2C+%22fair%22%2C+%22storm%22%2C+%22love%22%2C+%22ember%22%2C+%22vale%22%2C+%22deep%22%2C+%22dark%22%2C+%22black%22%2C+%22red%22%2C+%22true%22%2C+%22brass%22%5D%3B%0Aconst+LAST_PARTS_TWO%3A+%26%5B%26str%5D+%3D+%26%5B%22miller%22%2C+%22fisher%22%2C+%22ton%22%2C+%22gate%22%2C+%22stich%22%2C+%22bell%22%2C+%22thimble%22%2C+%22smith%22%2C+%22craft%22%2C+%22weather%22%2C+%22wright%22%5D%3B%0A%0Aconst+FORNAME_SINGLE%3A+%26%5B%26str%5D+%3D+%26%5B%22atstrid%22%2C+%22douglas%22%2C+%22elizabeth%22%2C+%22esther%22%2C+%22nico%22%2C+%22opal%22%2C+%22sebasti%C3%A1n%22%2C+%22victoria%22%2C+%22wendy%22%2C+%22zoe%22%2C+%22harper%22%2C+%22kim%22%2C+%22morgan%22%2C+%22addison%22%2C+%22robin%22%2C+%22jing%22%2C%5D%3B%0Aconst+SURNAME_SINGLE%3A+%26%5B%26str%5D+%3D+%26%5B%22acu%C3%B1a%22%2C+%22aoki%22%2C+%22babbage%22%2C+%22blackwell%22%2C+%22conway%22%2C+%22eldridge%22%2C+%22erd%C5%91s%22%2C+%22fazil%22%2C+%22fuller%22%2C+%22garcia%22%2C+%22harris%22%2C+%22kozuki%22%2C+%22lowell%22%2C+%22m%C3%BCller%22%2C+%22naccarato%22%2C+%22nzuyen%22%2C%22quinlan%22%2C+%22sat%C5%8D%22%2C%22tsai%22%2C+%22wagner%22%2C+%22zote%22%2C%5D%3B%0A%0A%2F%2Ffunction+to+generate+a+first+and+last+name+that+references+a+bool+if+to+select+single+names+or+concatenated+names+for+fore%2Fsurnames.%0Afn+generate_name%28%29+-%3E+String+%7B%0A++++let+mut+rng+%3D+rand%3A%3Arng%28%29%3B%0A++++let+use_two+%3D+random%28%29%3B+%2F%2F+Hey+it%27s+a+bool+generator+into+an+if+else+statement%2C+the+bool+is+the+condition+-+if+true%2C+the+name+will+be+two+words+concatenated%0A++++let+first_name+%3D+if+use_two+%7B%0A++++format%21%28%0A++++++++%22%7B%7D%7B%7D%22%2C%0A++++++++capitalize%28FIRST_PARTS_ONE.choose%28%26mut+rng%29.unwrap%28%29%29%2C+%2F%2Fpassing+the+first+section+to+the+capitalization+function.%0A++++++++FIRST_PARTS_TWO.choose%28%26mut+rng%29.unwrap%28%29%29%0A++++%7D+else+%7B%0A++++++++capitalize%28FORNAME_SINGLE.choose%28%26mut+rng%29.unwrap%28%29%29%0A++++%7D%3B%0A++++%2F%2FAnd+again+lets+set+it+to+random+if+it%27s+one+or+two+words+concatenated+to+a+surname%0A++++let+use_two+%3D+random%28%29%3B%0A++++let+last_name+%3D+if+use_two+%7B%0A++++format%21%28%0A++++++++%22%7B%7D%7B%7D%22%2C%0A++++++++capitalize%28LAST_PARTS_ONE.choose%28%26mut+rng%29.unwrap%28%29%29%2C%0A++++++++LAST_PARTS_TWO.choose%28%26mut+rng%29.unwrap%28%29%29%0A++++%7D+else+%7B%0A+++++++capitalize%28SURNAME_SINGLE.choose%28%26mut+rng%29.unwrap%28%29%29%0A++++%7D%3B%0A++++%2F%2FFinally%2C+we+now+add+the+two+chosen%2Fconstructed+names+to+the+final+name+combining+the+first+and+last+name.%0A++++format%21%28%22%7B%7D+%7B%7D%22%2C+first_name%2C+last_name%29%0A%7D%0A%0A++++%2F%2FMy+wonky+capitalizer+function+that+I+keep+running+into+borrowing+string+type+headaches%0Afn+capitalize%28s%3A+%26str%29+-%3E+String+%7B%0A++++if+s.is_empty%28%29+%7B%0A++++++++return+s.to_string%28%29%3B%0A++++%7D%0A++++let+mut+chars+%3D+s.chars%28%29%3B%0A++++let+first_char+%3D+chars.next%28%29.unwrap%28%29%3B+%2F%2FBasically%2C+it+splits+off+the+first+character%2C+capitalizes+it%2C+and+then+reassembles+it.%0A++++let+capitalized_first%3A+String+%3D+first_char.to_uppercase%28%29.collect%28%29%3B%0A++++let+rest%3A+String+%3D+chars.collect%28%29%3B%0A++++format%21%28%22%7B%7D%7B%7D%22%2C+capitalized_first%2C+rest%29%0A%7D%0A%0Afn+main%28%29+%7B%0A++++for+_+in+00..5%7B+%2F%2F+Nesting+our+result+in+a+loop+*+5+so+we+can+see+a+few+variants%0A++++++++%2F%2FNow+we+call+the+name+%28generate_name%29+function+and+then+print+the+results%21%0A++++++++let+name+%3D+generate_name%28%29%3B%0A++++++++println%21%28%22%7B%7D%22%2C+name%29%3B%0A++++%7D%0A%7D" height="600" width="550" title="Rust Compound Names"></iframe> 

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
<iframe src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&code=%2F%2FFirst%2C+let%27s+import+rand+because+we+are+going+to+be+using+a+lot+of+random+choice+selection+and+bool+generation%0Ause+rand%3A%3Aprelude%3A%3A*%3B%0Ause+rand%3A%3Arandom%3B%0A%0A%2F%2FI+have+made+a+few+constant+arrays+to+store+a+few+different+word+pools%2C+the+first+of+which+is+an+awkward+attempt+to+make+a+simple+concatenating+forename+generator%0Aconst+FIRST_PARTS_ONE%3A+%26%5B%26str%5D+%3D+%26%5B%22bright%22%2C+%22rach%22%2C+%22mary%22%2C+%22wet%22%2C+%22shel%22%2C+%22dear%22%2C+%22alk%22%2C+%22er%22%2C+%22sher%22%2C+%22zor%22%5D%3B%0Aconst+FIRST_PARTS_TWO%3A+%26%5B%26str%5D+%3D+%26%5B%22ton%22%2C+%22al%22%2C+%22es%22%2C+%22son%22%2C+%22ler%22%2C+%22win%22%5D%3B%0A%0Aconst+LAST_PARTS_ONE%3A+%26%5B%26str%5D+%3D+%26%5B%22willow%22%2C+%22bloom%22%2C+%22fair%22%2C+%22storm%22%2C+%22love%22%2C+%22ember%22%2C+%22vale%22%2C+%22deep%22%2C+%22dark%22%2C+%22black%22%2C+%22red%22%2C+%22true%22%2C+%22brass%22%5D%3B%0Aconst+LAST_PARTS_TWO%3A+%26%5B%26str%5D+%3D+%26%5B%22miller%22%2C+%22fisher%22%2C+%22ton%22%2C+%22gate%22%2C+%22stich%22%2C+%22bell%22%2C+%22thimble%22%2C+%22smith%22%2C+%22craft%22%2C+%22weather%22%2C+%22wright%22%5D%3B%0A%0Aconst+FORNAME_SINGLE%3A+%26%5B%26str%5D+%3D+%26%5B%22atstrid%22%2C+%22douglas%22%2C+%22elizabeth%22%2C+%22esther%22%2C+%22nico%22%2C+%22opal%22%2C+%22sebasti%C3%A1n%22%2C+%22victoria%22%2C+%22wendy%22%2C+%22zoe%22%2C+%22harper%22%2C+%22kim%22%2C+%22morgan%22%2C+%22addison%22%2C+%22robin%22%2C+%22jing%22%2C%5D%3B%0Aconst+SURNAME_SINGLE%3A+%26%5B%26str%5D+%3D+%26%5B%22acu%C3%B1a%22%2C+%22aoki%22%2C+%22babbage%22%2C+%22blackwell%22%2C+%22conway%22%2C+%22eldridge%22%2C+%22erd%C5%91s%22%2C+%22fazil%22%2C+%22fuller%22%2C+%22garcia%22%2C+%22harris%22%2C+%22kozuki%22%2C+%22lowell%22%2C+%22m%C3%BCller%22%2C+%22naccarato%22%2C+%22nzuyen%22%2C%22quinlan%22%2C+%22sat%C5%8D%22%2C%22tsai%22%2C+%22wagner%22%2C+%22zote%22%2C%5D%3B%0A%0A%2F%2Ffunction+to+generate+a+first+and+last+name+that+references+a+bool+if+to+select+single+names+or+concatenated+names+for+fore%2Fsurnames.%0Afn+generate_name%28%29+-%3E+String+%7B%0A++++let+mut+rng+%3D+rand%3A%3Arng%28%29%3B%0A++++let+use_two+%3D+random%28%29%3B+%2F%2F+Hey+it%27s+a+bool+generator+into+an+if+else+statement%2C+the+bool+is+the+condition+-+if+true%2C+the+name+will+be+two+words+concatenated%0A++++let+first_name+%3D+if+use_two+%7B%0A++++format%21%28%0A++++++++%22%7B%7D%7B%7D%22%2C%0A++++++++capitalize%28FIRST_PARTS_ONE.choose%28%26mut+rng%29.unwrap%28%29%29%2C+%2F%2Fpassing+the+first+section+to+the+capitalization+function.%0A++++++++FIRST_PARTS_TWO.choose%28%26mut+rng%29.unwrap%28%29%29%0A++++%7D+else+%7B%0A++++++++capitalize%28FORNAME_SINGLE.choose%28%26mut+rng%29.unwrap%28%29%29%0A++++%7D%3B%0A++++%2F%2FAnd+again+lets+set+it+to+random+if+it%27s+one+or+two+words+concatenated+to+a+surname%0A++++let+use_two+%3D+random%28%29%3B%0A++++let+last_name+%3D+if+use_two+%7B%0A++++format%21%28%0A++++++++%22%7B%7D%7B%7D%22%2C%0A++++++++capitalize%28LAST_PARTS_ONE.choose%28%26mut+rng%29.unwrap%28%29%29%2C%0A++++++++LAST_PARTS_TWO.choose%28%26mut+rng%29.unwrap%28%29%29%0A++++%7D+else+%7B%0A+++++++capitalize%28SURNAME_SINGLE.choose%28%26mut+rng%29.unwrap%28%29%29%0A++++%7D%3B%0A++++%2F%2FFinally%2C+we+now+add+the+two+chosen%2Fconstructed+names+to+the+final+name+combining+the+first+and+last+name.%0A++++format%21%28%22%7B%7D+%7B%7D%22%2C+first_name%2C+last_name%29%0A%7D%0A%0A++++%2F%2FMy+wonky+capitalizer+function+that+I+keep+running+into+borrowing+string+type+headaches%0Afn+capitalize%28s%3A+%26str%29+-%3E+String+%7B%0A++++if+s.is_empty%28%29+%7B%0A++++++++return+s.to_string%28%29%3B%0A++++%7D%0A++++let+mut+chars+%3D+s.chars%28%29%3B%0A++++let+first_char+%3D+chars.next%28%29.unwrap%28%29%3B+%2F%2FBasically%2C+it+splits+off+the+first+character%2C+capitalizes+it%2C+and+then+reassembles+it.%0A++++let+capitalized_first%3A+String+%3D+first_char.to_uppercase%28%29.collect%28%29%3B%0A++++let+rest%3A+String+%3D+chars.collect%28%29%3B%0A++++format%21%28%22%7B%7D%7B%7D%22%2C+capitalized_first%2C+rest%29%0A%7D%0A%0Afn+main%28%29+%7B%0A++++for+_+in+00..5%7B+%2F%2F+Nesting+our+result+in+a+loop+*+5+so+we+can+see+a+few+variants%0A++++++++%2F%2FNow+we+call+the+name+%28generate_name%29+function+and+then+print+the+results%21%0A++++++++let+name+%3D+generate_name%28%29%3B%0A++++++++println%21%28%22%7B%7D%22%2C+name%29%3B%0A++++%7D%0A%7D" height="600" width="550" title="Rust Compound Names"></iframe> 
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
<iframe src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&code=use+rand%3A%3Arandom%3B%0Ause+rand%3A%3Adistr%3A%3Aweighted%3A%3AWeightedIndex%3B%0Ause+rand%3A%3Aprelude%3A%3A*%3B%0A%0A%2F%2F%2F+It%27s+so+gender%2C+lets+break+names+into+general+gendered+understanding+since+that+might+be+useful+for+people+generation+later%3F%0A%23%5Bderive%28Clone%2C+Copy%29%5D%0Aenum+Gender+%7B%0A++++Male%2C%0A++++Female%2C%0A++++Nonbinary%2C%0A%7D%0A%0A%2F%2F%2F+Last-name+construction+patterns%2C+which+is+quite+messy%2C+but+I+tried+to+combine+concatination+with+what+might+yield+interesting+and+semisensemaking+results%0A%23%5Bderive%28Clone%2C+Copy%29%5D%0Aenum+LastNamePattern+%7B%0A++++AnimalOccupation%2C%0A++++AnimalEnd%2C%0A++++ColorAnimal%2C%0A++++ColorEnd%2C%0A++++ColorNoun%2C%0A++++ColorOccupation%2C%0A++++DescriptorAnimal%2C%0A++++DescriptorNoun%2C%0A++++DescriptorOccupation%2C%0A++++SingleSurname%2C%0A%7D%0A%0A%2F*+-----------------------------%0A+++Word+Banks+and+Pools%0A--------------------------------+*%2F%0A%0A%2F%2FFirst+our+gendery+ones%0Aconst+FIRST_MALE%3A+%26%5B%26str%5D+%3D+%26%5B%22alaric%22%2C+%22bram%22%2C+%22dorian%22%2C+%22douglas%22%2C+%22sebasti%C3%A1n%22%2C+%22jasper%22%2C+%22marcelo%22%2C+%22draven%22%2C+%22leo%22%2C+%22dimitri%22%2C+%22jasper%22%2C+%22manuel%22%2C+%22kane%22%2C+%22thomas%22%2C+%22oliver%22%2C%5D%3B%0Aconst+FIRST_FEMALE%3A+%26%5B%26str%5D+%3D+%26%5B%22elara%22%2C+%22mira%22%2C+%22selene%22%2C+%22nyssa%22%2C+%22atstrid%22%2C+%22esther%22%2C+%22opal%22%2C+%22victoria%22%2C+%22zoe%22%2C+%22flora%22%2C+%22margret%22%2C+%22sloane%22%2C+%22yashira%22%2C+%22jing%22%2C+%22wendy%22%2C%5D%3B%0Aconst+FIRST_NONBINARY%3A+%26%5B%26str%5D+%3D+%26%5B%22rowan%22%2C+%22kai%22%2C+%22vale%22%2C+%22nico%22%2C+%22hunter%22%2C+%22skyler%22%2C+%22ash%22%2C+%22izzy%22%2C+%22riley%22%2C+%22quinn%22%2C+%22parker%22%2C+%22jordan%22%2C+%22blake%22%2C+%22taylor%22%2C+%22casey%22%2C+%22avery%22%2C+%22rory%22%2C+%22harper%22%2C+%22kim%22%2C+%22wren%22%2C+%22morgan%22%2C+%22addison%22%2C+%22robin%22%2C%5D%3B%0A%2F%2FNow+our+mess+of+last+name+construction%0Aconst+COLORS%3A+%26%5B%26str%5D+%3D+%26%5B%22red%22%2C+%22black%22%2C+%22silver%22%2C+%22golden%22%2C%22blue%22%2C+%22green%22%2C+%22gold%22%2C+%22brass%22%2C+%22copper%22%2C%5D%3B%0Aconst+ANIMALS%3A+%26%5B%26str%5D+%3D+%26%5B%22wolf%22%2C+%22raven%22%2C+%22bear%22%2C+%22hart%22%2C+%22fox%22%2C+%22woolf%22%2C+%22ram%22%2C+%22bair%22%2C+%22lion%22%2C+%22dragon%22%2C+%22phenix%22%2C+%22man%22%2C+%22men%22%2C%5D%3B%0Aconst+OCCUPATIONS%3A+%26%5B%26str%5D+%3D+%26%5B%22hunter%22%2C+%22warden%22%2C+%22scholar%22%2C+%22miller%22%2C+%22fisher%22%2C+%22craft%22%2C+%22smith%22%2C+%22baker%22%2C+%22cook%22%2C+%22wright%22%2C+%22mason%22%2C+%22maker%22%2C+%22seamer%22%2C+%22booker%22%2C+%22wroughter%22%2C%5D%3B%0Aconst+DESCRIPTORS%3A+%26%5B%26str%5D+%3D+%26%5B%22deep%22%2C+%22dark%22%2C+%22light%22%2C+%22quick%22%2C+%22old%22%2C+%22love%22%2C+%22glad%22%2C+%22good%22%2C+%22new%22%2C+%22fast%22%2C+%22short%22%2C+%22tall%22%2C+%22big%22%2C+%22flight%22%2C+%22small%22%2C+%22strange%22%2C%5D%3B%0Aconst+NOUNS%3A+%26%5B%26str%5D+%3D+%26%5B%22foot%22%2C+%22thumb%22%2C+%22hand%22%2C%22moon%22%2C+%22devil%22%2C+%22rook%22%2C+%22bell%22%2C+%22thimble%22%2C+%22sword%22%2C+%22tale%22%2C+%22eye%22%2C+%22stone%22%2C+%22ivy%22%2C+%22song%22%2C+%22apple%22%2C+%22gate%22%2C+%22wood%22%2C+%22weather%22%2C%5D%3B%0Aconst+ENDS%3A+%26%5B%26str%5D+%3D+%26%5B%22ton%22%2C+%22seer%22%2C+%22well%22%2C+%22worth%22%2C+%22field%22%2C+%22lake%22%2C+%22win%22%2C+%22man%22%2C+%22dasher%22%5D%3B%0A%2F%2Fsolo+last+names+if+that+is+chosen%0Aconst+SURNAME_SINGLE%3A+%26%5B%26str%5D+%3D+%26%5B%22acu%C3%B1a%22%2C+%22aoki%22%2C+%22babbage%22%2C+%22blackwell%22%2C+%22conway%22%2C+%22eldridge%22%2C+%22erd%C5%91s%22%2C+%22fazil%22%2C+%22fuller%22%2C+%22garcia%22%2C+%22harris%22%2C+%22kozuki%22%2C+%22lowell%22%2C+%22m%C3%BCller%22%2C+%22naccarato%22%2C+%22nzuyen%22%2C%22quinlan%22%2C+%22sat%C5%8D%22%2C+%22strange%22%2C+%22tsai%22%2C+%22wagner%22%2C+%22zote%22%2C%5D%3B%0A%0A%2F*+-----------------------------%0A+++Pattern+Weights+For+Surnames%0A--------------------------------+*%2F%0A%0A%2F%2FThe+thought+here+is+maybe+we+would+want+ceritain+last+names+to+types+more+likely+manifest.%0Aconst+LAST_NAME_PATTERNS%3A+%26%5B%28LastNamePattern%2C+u8%29%5D+%3D+%26%5B%0A++++%28LastNamePattern%3A%3AColorAnimal%2C+2%29%2C%0A++++%28LastNamePattern%3A%3AAnimalOccupation%2C+2%29%2C%0A++++%28LastNamePattern%3A%3AColorOccupation%2C+2%29%2C%0A++++%28LastNamePattern%3A%3ADescriptorAnimal%2C+2%29%2C%0A++++%28LastNamePattern%3A%3ADescriptorOccupation%2C+2%29%2C%0A++++%28LastNamePattern%3A%3ADescriptorNoun%2C+3%29%2C%0A++++%28LastNamePattern%3A%3AColorEnd%2C+2%29%2C%0A++++%28LastNamePattern%3A%3AAnimalEnd%2C+3%29%2C%0A++++%28LastNamePattern%3A%3AColorNoun%2C+2%29%2C%0A++++%28LastNamePattern%3A%3ASingleSurname%2C+6%29%2C%0A%5D%3B%0A%0A%2F*+-----------------------------%0A+++Random+Helpers%0A--------------------------------+*%2F%0A%0Afn+pick%3C%27a%3E%28rng%3A+%26mut+impl+Rng%2C+pool%3A+%26%27a+%5B%26str%5D%29+-%3E+%26%27a+str+%7B%0A++++pool.choose%28rng%29.expect%28%22pool+must+not+be+empty%22%29%0A%7D%0A%0Afn+pick_distinct%3C%27a%3E%28%0A++++rng%3A+%26mut+impl+Rng%2C%0A++++pool%3A+%26%27a+%5B%26str%5D%2C%0A++++not_this%3A+%26str%2C%0A%29+-%3E+%26%27a+str+%7B%0A++++loop+%7B%0A++++++++let+choice+%3D+pick%28rng%2C+pool%29%3B%0A++++++++if+choice+%21%3D+not_this+%7B%0A++++++++++++return+choice%3B%0A++++++++%7D%0A++++%7D%0A%7D%0A%0Afn+pick_last_name_pattern%28rng%3A+%26mut+impl+Rng%29+-%3E+LastNamePattern+%7B%0A++++let+weights+%3D+LAST_NAME_PATTERNS.iter%28%29.map%28%7C%28_%2C+w%29%7C+*w%29%3B%0A++++let+dist+%3D+WeightedIndex%3A%3Anew%28weights%29.expect%28%22invalid+pattern+weights%22%29%3B%0A++++LAST_NAME_PATTERNS%5Bdist.sample%28rng%29%5D.0%0A%7D%0A%0A%2F*+-----------------------------%0A+++Capitalization+Functions%0A--------------------------------+*%2F%0A%0Afn+capitalize%28s%3A+%26str%29+-%3E+String+%7B%0A++++let+mut+chars+%3D+s.chars%28%29%3B%0A%0A++++match+chars.next%28%29+%7B%0A++++++++None+%3D%3E+String%3A%3Anew%28%29%2C%0A++++++++Some%28first%29+%3D%3E+%7B%0A++++++++++++let+first+%3D+first.to_uppercase%28%29.collect%3A%3A%3CString%3E%28%29%3B%0A++++++++++++let+rest+%3D+chars.as_str%28%29.to_lowercase%28%29%3B%0A++++++++++++format%21%28%22%7Bfirst%7D%7Brest%7D%22%29%0A++++++++%7D%0A++++%7D%0A%7D%0A%0Afn+capitalize_full_name%28name%3A+%26str%29+-%3E+String+%7B%0A++++name.split_whitespace%28%29%0A++++++++.map%28capitalize%29%0A++++++++.collect%3A%3A%3CVec%3C_%3E%3E%28%29%0A++++++++.join%28%22+%22%29%0A%7D%0A%0A%2F*+-----------------------------%0A+++Name+Generation+Proper%0A--------------------------------+*%2F%0A%0Afn+pick_first_name%3C%27a%3E%28rng%3A+%26mut+impl+Rng%2C+gender%3A+Gender%29+-%3E+%26%27a+str+%7B%0A++++match+gender+%7B%0A++++++++Gender%3A%3AMale+%3D%3E+pick%28rng%2C+FIRST_MALE%29%2C%0A++++++++Gender%3A%3AFemale+%3D%3E+pick%28rng%2C+FIRST_FEMALE%29%2C%0A++++++++Gender%3A%3ANonbinary+%3D%3E+pick%28rng%2C+FIRST_NONBINARY%29%2C%0A++++%7D%0A%7D%0A%0Afn+generate_last_name%28rng%3A+%26mut+impl+Rng%29+-%3E+String+%7B%0A++++match+pick_last_name_pattern%28rng%29+%7B%0A++++++++LastNamePattern%3A%3AColorAnimal+%3D%3E+%7B%0A++++++++++++let+color+%3D+pick%28rng%2C+COLORS%29%3B%0A++++++++++++let+animal+%3D+pick_distinct%28rng%2C+ANIMALS%2C+color%29%3B%0A++++++++++++format%21%28%22%7Bcolor%7D%7Banimal%7D%22%29%0A++++++++%7D%0A++++++++LastNamePattern%3A%3AAnimalOccupation+%3D%3E+%7B%0A++++++++++++let+animal+%3D+pick%28rng%2C+ANIMALS%29%3B%0A++++++++++++let+job+%3D+pick_distinct%28rng%2C+OCCUPATIONS%2C+animal%29%3B%0A++++++++++++format%21%28%22%7Banimal%7D%7Bjob%7D%22%29%0A++++++++%7D%0A++++++++LastNamePattern%3A%3AColorOccupation+%3D%3E+%7B%0A++++++++++++let+color+%3D+pick%28rng%2C+COLORS%29%3B%0A++++++++++++let+job+%3D+pick_distinct%28rng%2C+OCCUPATIONS%2C+color%29%3B%0A++++++++++++format%21%28%22%7Bcolor%7D%7Bjob%7D%22%29%0A++++++++%7D%0A++++++++LastNamePattern%3A%3ADescriptorAnimal+%3D%3E+%7B%0A++++++++++++let+description+%3D+pick%28rng%2C+DESCRIPTORS%29%3B%0A++++++++++++let+animal+%3D+pick_distinct%28rng%2C+ANIMALS%2C+description%29%3B%0A++++++++++++format%21%28%22%7Bdescription%7D%7Banimal%7D%22%29%0A++++++++%7D%0A++++++++LastNamePattern%3A%3ADescriptorOccupation+%3D%3E+%7B%0A++++++++++++let+description+%3D+pick%28rng%2C+DESCRIPTORS%29%3B%0A++++++++++++let+job+%3D+pick_distinct%28rng%2C+OCCUPATIONS%2C+description%29%3B%0A++++++++++++format%21%28%22%7Bdescription%7D%7Bjob%7D%22%29%0A++++++++%7D%0A++++++++LastNamePattern%3A%3AColorEnd+%3D%3E+%7B%0A++++++++++++let+color+%3D+pick%28rng%2C+COLORS%29%3B%0A++++++++++++let+end+%3D+pick_distinct%28rng%2C+ENDS%2C+color%29%3B%0A++++++++++++format%21%28%22%7Bcolor%7D%7Bend%7D%22%29%0A++++++++%7D%0A++++++++LastNamePattern%3A%3AAnimalEnd+%3D%3E+%7B%0A++++++++++++let+animal+%3D+pick%28rng%2C+ANIMALS%29%3B%0A++++++++++++let+end+%3D+pick_distinct%28rng%2C+ENDS%2C+animal%29%3B%0A++++++++++++format%21%28%22%7Banimal%7D%7Bend%7D%22%29%0A++++++++%7D%0A++++++++LastNamePattern%3A%3ADescriptorNoun+%3D%3E+%7B%0A++++++++++++let+descriptor+%3D+pick%28rng%2C+DESCRIPTORS%29%3B%0A++++++++++++let+noun+%3D+pick_distinct%28rng%2C+NOUNS%2C+descriptor%29%3B%0A++++++++++++format%21%28%22%7Bdescriptor%7D%7Bnoun%7D%22%29%0A++++++++%7D%0A++++++++LastNamePattern%3A%3AColorNoun+%3D%3E+%7B%0A++++++++++++let+color+%3D+pick%28rng%2C+COLORS%29%3B%0A++++++++++++let+noun+%3D+pick_distinct%28rng%2C+NOUNS%2C+color%29%3B%0A++++++++++++format%21%28%22%7Bcolor%7D%7Bnoun%7D%22%29%0A++++++++%7D%0A++++++++LastNamePattern%3A%3ASingleSurname+%3D%3E+%7B%0A++++++++++++let+fact+%3D+random%28%29%3B%0A++++++++++++let+surname+%3D+if+fact+%7B%0A++++++++++++++++pick%28rng%2C+SURNAME_SINGLE%29%0A++++++++++++%7D+else+%7B%0A++++++++++++++++pick%28rng%2C+OCCUPATIONS%29%0A++++++++++++%7D%3B%0A++++++++++++format%21%28%22%7Bsurname%7D%22%29%0A++++++++%7D%0A++++%7D%0A%7D%0A%0Afn+generate_name%28rng%3A+%26mut+impl+Rng%2C+gender%3A+Gender%29+-%3E+String+%7B%0A++++let+first+%3D+pick_first_name%28rng%2C+gender%29%3B%0A++++let+last+%3D+generate_last_name%28rng%29%3B%0A++++capitalize_full_name%28%26format%21%28%22%7Bfirst%7D+%7Blast%7D%22%29%29%0A%7D%0A%0A%2F*+-----------------------------%0A+++Main+Function%0A--------------------------------+*%2F%0A%0Afn+main%28%29+%7B%0A++++let+mut+rng+%3D+rand%3A%3Arng%28%29%3B%0A%0A++++for+_+in+0..10+%7B%0A++++++++%2F%2FWe%27ll+do+kind+of+a+homemade+weighted+result+with+a+three+in+seven+chance+for+a+nonbinary+name+and+two+in+seven+for+binary+names%0A++++++++let+gender+%3D+match+rand%3A%3Arandom_range%280..7%29+%7B%0A++++++++++++1%7C2+%3D%3E+Gender%3A%3AMale%2C%0A++++++++++++3%7C4+%3D%3E+Gender%3A%3AFemale%2C%0A++++++++++++_+%3D%3E+Gender%3A%3ANonbinary%2C%0A++++++++%7D%3B%0A%0A++++++++let+name+%3D+generate_name%28%26mut+rng%2C+gender%29%3B%0A++++++++println%21%28%22%7Bname%7D%22%29%3B%0A++++%7D%0A%7D%0A" height="600" width="550" title="Rust Super Advanced Surnames Code Player"></iframe> 
{% endtab %}

{% endtabs %}

{% enddetails %}

Long name with honorifics and double epiphets:
**Madam Wendy Redbells the Dark Tyrant of the Deep Mauw, Adept of the Queens Shadow**

| Honorific | Firstname | Surname1 | Surname2 | Filler | Descriptor | Reputation | Filler | Descriptor | Place | Class | Filler | Leader | Noun   |
| --------- | --------- | -------- | -------- | ------ | ---------- | ---------- | ------ | ---------- | ----- | ----- | ------ | ------ | ------ |
| Madam     | Wendy     | Red      | bells    | the    | Dark       | Tyrant     | of the | Deep       | Mauw  | Adept | of the | Queens | Shadow |


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
{% tab ExamplesThree Honorifics & Epiphets Code Player %}

<iframe src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&code=use+rand%3A%3Arandom%3B%0Ause+rand%3A%3Adistr%3A%3Aweighted%3A%3AWeightedIndex%3B%0Ause+rand%3A%3Aprelude%3A%3A*%3B%0A%0A%2F%2F%2F+It%27s+so+gender%2C+lets+break+names+into+general+gendered+understanding+since+that+might+be+useful+for+people+generation+later%3F%0A%23%5Bderive%28Clone%2C+Copy%29%5D%0Aenum+Gender+%7B%0A++++Male%2C%0A++++Female%2C%0A++++Nonbinary%2C%0A%7D%0A%0A%2F%2F%2F+Last-name+construction+patterns%2C+which+is+quite+messy%2C+but+I+tried+to+combine+concatination+with+what+might+yield+interesting+and+semisensemaking+results%0A%23%5Bderive%28Clone%2C+Copy%29%5D%0Aenum+LastNamePattern+%7B%0A++++AnimalOccupation%2C%0A++++AnimalEnd%2C%0A++++ColorAnimal%2C%0A++++ColorEnd%2C%0A++++ColorNoun%2C%0A++++ColorOccupation%2C%0A++++DescriptorAnimal%2C%0A++++DescriptorNoun%2C%0A++++DescriptorOccupation%2C%0A++++SingleSurname%2C%0A%7D%0A%0A%2F%2F%2F+Epithet+construction+patterns+for+interesting+titles%0A%23%5Bderive%28Clone%2C+Copy%29%5D%0Aenum+EpithetPattern+%7B%0A++++TheDescriptor%2C%0A++++TheAnimal%2C%0A++++TheOccupation%2C%0A++++OfTheNoun%2C%0A++++NounOfThePlace%2C%0A++++DescriptorOccupation%2C%0A++++NounOfTheSociety%2C%0A++++OfTheSociety%2C%0A%7D%0A%0A%2F%2F%2F+Society+name+construction+patterns%0A%23%5Bderive%28Clone%2C+Copy%29%5D%0Aenum+SocietyPattern+%7B%0A++++ColorNoun%2C%0A++++DescriptorNoun%2C%0A++++NounOfNoun%2C%0A++++TypeOfTheNoun%2C%0A++++TypeOfDescriptor%2C%0A%7D%0A%0A%2F*+-----------------------------%0A+++Word+Banks+and+Pools%0A--------------------------------+*%2F%0A%0A%2F%2FFirst+our+gendery+ones%0Aconst+FIRST_MALE%3A+%26%5B%26str%5D+%3D+%26%5B%22alaric%22%2C+%22bram%22%2C+%22dorian%22%2C+%22douglas%22%2C+%22sebasti%C3%A1n%22%2C+%22jasper%22%2C+%22marcelo%22%2C+%22draven%22%2C+%22leo%22%2C+%22dimitri%22%2C+%22jasper%22%2C+%22manuel%22%2C+%22kane%22%2C+%22thomas%22%2C+%22oliver%22%2C+%22casper%22%2C+%22paco%22%2C+%22witi%22%2C+%22quentin%22%2C+%22basil%22%2C+%22broderick%22%2C+%22gregory%22%2C+%22maxwell%22%2C+%22cailean%22%2C+%22zulo%22%2C+%22zachery%22%2C%5D%3B%0Aconst+FIRST_FEMALE%3A+%26%5B%26str%5D+%3D+%26%5B%22elara%22%2C+%22mira%22%2C+%22selene%22%2C+%22nyssa%22%2C+%22atstrid%22%2C+%22esther%22%2C+%22opal%22%2C+%22victoria%22%2C+%22zoe%22%2C+%22flora%22%2C+%22margret%22%2C+%22sloane%22%2C+%22yashira%22%2C+%22jing%22%2C+%22wendy%22%2C%22octavia%22%2C+%22vivian%22%2C+%22xiu%22%2C+%22yingyue%22%2C+%22catherine%22%2C+%22eleanor%22%2C+%22margot%22%2C+%22ada%22%2C+%22sibyl%22%2C+%22elspeth%22%2C%5D%3B%0Aconst+FIRST_NONBINARY%3A+%26%5B%26str%5D+%3D+%26%5B%22rowan%22%2C+%22kai%22%2C+%22vale%22%2C+%22nico%22%2C+%22hunter%22%2C+%22skyler%22%2C+%22ash%22%2C+%22izzy%22%2C+%22riley%22%2C+%22quinn%22%2C+%22parker%22%2C+%22jordan%22%2C+%22blake%22%2C+%22taylor%22%2C+%22casey%22%2C+%22avery%22%2C+%22rory%22%2C+%22harper%22%2C+%22kim%22%2C+%22wren%22%2C+%22morgan%22%2C+%22addison%22%2C+%22robin%22%2C+%22zepher%22%2C+%22gene%22%2C+%22clark%22%2C+%22curi%22%2C%5D%3B%0A%0A%2F%2FHonorifics+by+gender%0Aconst+HONORIFIC_MALE%3A+%26%5B%26str%5D+%3D+%26%5B%22Sir%22%2C+%22Lord%22%2C+%22Master%22%2C+%22Baron%22%2C+%22Baronet%22%2C+%22Count%22%2C+%22Viscount%22%2C+%22Duke%22%2C+%22Prince%22%2C+%22Priest%22%2C+%22Marquess%22%2C+%22King%22%2C+%22Emperor%22%2C+%22Professor%22%2C+%22Man+of+Science%22%2C+%22Doctor%22%2C+%22Captain%22%2C%5D%3B%0Aconst+HONORIFIC_FEMALE%3A+%26%5B%26str%5D+%3D+%26%5B%22Miss%22%2C+%22Lady%22%2C+%22Mistress%22%2C+%22Baroness%22%2C+%22Baronetess%22%2C+%22Countess%22%2C+%22Viscountess%22%2C+%22Duchess%22%2C+%22Princess%22%2C+%22Priestess%22%2C+%22Marchioness%22%2C%22Queen%22%2C%22Empress%22%2C+%22Professor%22%2C+%22Scientist%22%2C+%22Doctor%22%2C+%22Captain%22%2C%5D%3B%0Aconst+HONORIFIC_NONBINARY%3A+%26%5B%26str%5D+%3D+%26%5B%22Mx.%22%2C+%22Laird%22%2C+%22Mastrum+%22%2C+%22Barum%22%2C+%22Baronetum%22%2C+%22Countum%22%2C+%22Viscountum%22%2C+%22Duchum%22%2C+%22Princem%22%2C+%22Priestex%22%2C+%22Marquem%22%2C+%22Sov%22%2C+%22Emperum%22%2C+%22Professor%22%2C+%22Scientist%22%2C+%22Doctor%22%2C+%22Captain%22%2C%5D%3B%0A%0A%2F%2FNow+our+mess+of+last+name+construction%0Aconst+COLORS%3A+%26%5B%26str%5D+%3D+%26%5B%22red%22%2C+%22black%22%2C+%22silver%22%2C+%22golden%22%2C+%22blue%22%2C+%22green%22%2C+%22gold%22%2C+%22brass%22%2C+%22copper%22%2C%5D%3B%0Aconst+ANIMALS%3A+%26%5B%26str%5D+%3D+%26%5B%22wolf%22%2C+%22raven%22%2C+%22bear%22%2C+%22hart%22%2C+%22fox%22%2C+%22woolf%22%2C+%22ram%22%2C+%22bair%22%2C+%22lion%22%2C+%22dragon%22%2C+%22phenix%22%2C+%22man%22%2C+%22men%22%2C+%22crane%22%2C%5D%3B%0Aconst+OCCUPATIONS%3A+%26%5B%26str%5D+%3D+%26%5B%22hunter%22%2C+%22warden%22%2C+%22scholar%22%2C+%22miller%22%2C+%22fisher%22%2C+%22craft%22%2C+%22smith%22%2C+%22baker%22%2C+%22cook%22%2C+%22wright%22%2C+%22mason%22%2C+%22maker%22%2C+%22seamer%22%2C+%22booker%22%2C+%22wroughter%22%2C%5D%3B%0Aconst+DESCRIPTORS%3A+%26%5B%26str%5D+%3D+%26%5B%22deep%22%2C+%22dark%22%2C+%22light%22%2C+%22quick%22%2C+%22old%22%2C+%22love%22%2C+%22glad%22%2C+%22good%22%2C+%22new%22%2C+%22fast%22%2C+%22short%22%2C+%22tall%22%2C+%22big%22%2C+%22flight%22%2C+%22small%22%2C%5D%3B%0Aconst+NOUNS%3A+%26%5B%26str%5D+%3D+%26%5B%22foot%22%2C+%22thumb%22%2C+%22hand%22%2C%22moon%22%2C+%22devil%22%2C+%22rook%22%2C+%22bell%22%2C+%22thimble%22%2C+%22sword%22%2C+%22tale%22%2C+%22eye%22%2C+%22stone%22%2C+%22ivy%22%2C+%22song%22%2C+%22apple%22%2C+%22gate%22%2C+%22wood%22%2C+%22weather%22%2C%5D%3B%0Aconst+ENDS%3A+%26%5B%26str%5D+%3D+%26%5B%22ton%22%2C+%22seer%22%2C+%22well%22%2C+%22worth%22%2C+%22field%22%2C+%22lake%22%2C+%22win%22%2C+%22man%22%2C+%22dasher%22%5D%3B%0A%0A%2F%2FAdditional+word+banks+for+epithets%0Aconst+EPITHET_DESCRIPTORS%3A+%26%5B%26str%5D+%3D+%26%5B%22Brave%22%2C+%22Wise%22%2C+%22Bold%22%2C+%22Swift%22%2C+%22Fierce%22%2C+%22Gentle%22%2C+%22Cunning%22%2C+%22Strong%22%2C+%22Silent%22%2C+%22Wild%22%2C+%22Calm%22%2C+%22Proud%22%2C+%22Just%22%2C+%22Fair%22%2C+%22True%22%2C+%22Great%22%2C+%22jocular%22%2C+%22terrible%22%2C+%22dim%22%2C+%22horror%22%2C+%22tyrant%22%2C+%22aweful%22%2C+%22devourer%22%2C+%22dancing%22%2C+%22jewel%22%2C+%22enforcer%22%2C+%22butcher%22%2C%5D%3B%0Aconst+EPITHET_PLACES%3A+%26%5B%26str%5D+%3D+%26%5B%22North%22%2C+%22South%22%2C+%22East%22%2C+%22West%22%2C+%22Mountain%22%2C+%22Valley%22%2C+%22Sea%22%2C+%22Forest%22%2C+%22Plains%22%2C+%22Moor%22%2C+%22Marsh%22%2C+%22Highlands%22%2C+%22Wastes%22%2C+%22depths%22%2C+%22hollow%22%2C+%22gulch%22%2C+%22ravine%22%2C+%22tundra%22%2C%5D%3B%0Aconst+EPITHET_NOUNS%3A+%26%5B%26str%5D+%3D+%26%5B%22sword%22%2C+%22light%22%2C+%22axe%22%2C+%22knife%22%2C+%22dagger%22%2C+%22shield%22%2C+%22rook%22%2C+%22spider%22%2C+%22flower%22%2C+%22rose%22%2C+%22demon%22%2C+%22falcon%22%2C+%22champion%22%2C%5D%3B%0A%0A%2F%2Fmetals%3A+copper%2C+gold%2C+silver%2C+nickel%2C+steel%2C+brass%2C+bronse%2C+peuter%2C+platnum%2C+iron%2C+lead%2C+alluminum%0A%2F%2Fstone%3A+dimond%2C+saphire%2C+onyx%2C+ruby%2C+topaz%2C+amber%2C+amathyst%2C+obscidian%0A%2F%2F+sword+of+the+south%2C+the+dancing+axe%2C+brave+light+of+the+north%2C+the+vizard+wizard%0A%0A%2F%2FWord+banks+for+generating+secret+societies+and+guilds%0Aconst+SOCIETY_TYPES%3A+%26%5B%26str%5D+%3D+%26%5B%22Guild%22%2C+%22Order%22%2C+%22Society%22%2C+%22Circle%22%2C+%22Council%22%2C+%22Brotherhood%22%2C+%22Fellowship%22%2C+%22League%22%2C+%22Covenant%22%2C+%22Assembly%22%2C+%22Syndicate%22%2C+%22Fraternity%22%2C+%22College%22%2C+%22Confraternity%22%2C+%22Union%22%2C+%22Company%22%2C+%22Sisterhood%22%2C+%22Conclave%22%5D%3B%0Aconst+SOCIETY_NOUNS%3A+%26%5B%26str%5D+%3D+%26%5B%22Compass%22%2C+%22Archive%22%2C+%22Chain%22%2C+%22Eye%22%2C+%22Stars%22%2C+%22Threshold%22%2C+%22Shadows%22%2C+%22Dawn%22%2C+%22Echoes%22%2C+%22Mirrors%22%2C+%22Word%22%2C+%22Embers%22%2C+%22Ravens%22%2C+%22Path%22%2C+%22Thorns%22%2C+%22Door%22%2C+%22Flame%22%2C+%22Veil%22%2C+%22Seal%22%2C+%22Crown%22%2C+%22Key%22%2C+%22Tower%22%2C+%22Scroll%22%2C+%22Oath%22%5D%3B%0Aconst+SOCIETY_DESCRIPTORS%3A+%26%5B%26str%5D+%3D+%26%5B%22Hidden%22%2C+%22Veiled%22%2C+%22Sealed%22%2C+%22Broken%22%2C+%22Endless%22%2C+%22Silent%22%2C+%22Ancient%22%2C+%22Crimson%22%2C+%22Azure%22%2C+%22Obsidian%22%2C+%22Silver%22%2C+%22Golden%22%2C+%22Eternal%22%2C+%22Forgotten%22%2C+%22Sacred%22%2C+%22Secret%22%5D%3B%0A%0A%0A%2F%2Fsolo+last+names+if+that+is+chosen%0Aconst+SURNAME_SINGLE%3A+%26%5B%26str%5D+%3D+%26%5B%22acu%C3%B1a%22%2C+%22aoki%22%2C+%22babbage%22%2C+%22blackwell%22%2C+%22conway%22%2C+%22eldridge%22%2C+%22erd%C5%91s%22%2C+%22fazil%22%2C+%22fuller%22%2C+%22garcia%22%2C+%22harris%22%2C+%22kozuki%22%2C+%22lowell%22%2C+%22m%C3%BCller%22%2C+%22naccarato%22%2C+%22nzuyen%22%2C%22quinlan%22%2C+%22sat%C5%8D%22%2C%22tsai%22%2C+%22wagner%22%2C+%22zote%22%2C%5D%3B%0A%0A%2F*+-----------------------------%0A+++Pattern+Weights+For+Surnames%0A--------------------------------+*%2F%0A%0A%2F%2FThe+thought+here+is+maybe+we+would+want+ceritain+last+names+to+types+more+likely+manifest.%0Aconst+LAST_NAME_PATTERNS%3A+%26%5B%28LastNamePattern%2C+u8%29%5D+%3D+%26%5B%0A++++%28LastNamePattern%3A%3AColorAnimal%2C+2%29%2C%0A++++%28LastNamePattern%3A%3AAnimalOccupation%2C+3%29%2C%0A++++%28LastNamePattern%3A%3AColorOccupation%2C+2%29%2C%0A++++%28LastNamePattern%3A%3ADescriptorAnimal%2C+2%29%2C%0A++++%28LastNamePattern%3A%3ADescriptorOccupation%2C+2%29%2C%0A++++%28LastNamePattern%3A%3ADescriptorNoun%2C+3%29%2C%0A++++%28LastNamePattern%3A%3AColorEnd%2C+2%29%2C%0A++++%28LastNamePattern%3A%3AAnimalEnd%2C+3%29%2C%0A++++%28LastNamePattern%3A%3AColorNoun%2C+2%29%2C%0A++++%28LastNamePattern%3A%3ASingleSurname%2C+6%29%2C%0A%5D%3B%0A%0A%2F%2FPattern+weights+for+epithets%0Aconst+EPITHET_PATTERNS%3A+%26%5B%28EpithetPattern%2C+u8%29%5D+%3D+%26%5B%0A++++%28EpithetPattern%3A%3ATheDescriptor%2C+4%29%2C%0A++++%28EpithetPattern%3A%3ATheAnimal%2C+2%29%2C%0A++++%28EpithetPattern%3A%3ATheOccupation%2C+2%29%2C%0A++++%28EpithetPattern%3A%3AOfTheNoun%2C+3%29%2C%0A++++%28EpithetPattern%3A%3ANounOfThePlace%2C+3%29%2C%0A++++%28EpithetPattern%3A%3ADescriptorOccupation%2C+2%29%2C%0A++++%28EpithetPattern%3A%3ANounOfTheSociety%2C+3%29%2C%0A++++%28EpithetPattern%3A%3AOfTheSociety%2C+3%29%2C%0A%5D%3B%0A%0A%2F%2FPattern+weights+for+society+name+generation%0Aconst+SOCIETY_PATTERNS%3A+%26%5B%28SocietyPattern%2C+u8%29%5D+%3D+%26%5B%0A++++%28SocietyPattern%3A%3AColorNoun%2C+3%29%2C%0A++++%28SocietyPattern%3A%3ADescriptorNoun%2C+3%29%2C%0A++++%28SocietyPattern%3A%3ANounOfNoun%2C+2%29%2C%0A++++%28SocietyPattern%3A%3ATypeOfTheNoun%2C+4%29%2C%0A++++%28SocietyPattern%3A%3ATypeOfDescriptor%2C+2%29%2C%0A%5D%3B%0A%0A%2F*+-----------------------------%0A+++Random+Helpers%0A--------------------------------+*%2F%0A%0Afn+pick%3C%27a%3E%28rng%3A+%26mut+impl+Rng%2C+pool%3A+%26%27a+%5B%26str%5D%29+-%3E+%26%27a+str+%7B%0A++++pool.choose%28rng%29.expect%28%22pool+must+not+be+empty%22%29%0A%7D%0A%0Afn+pick_distinct%3C%27a%3E%28%0A++++rng%3A+%26mut+impl+Rng%2C%0A++++pool%3A+%26%27a+%5B%26str%5D%2C%0A++++not_this%3A+%26str%2C%0A%29+-%3E+%26%27a+str+%7B%0A++++loop+%7B%0A++++++++let+choice+%3D+pick%28rng%2C+pool%29%3B%0A++++++++if+choice+%21%3D+not_this+%7B%0A++++++++++++return+choice%3B%0A++++++++%7D%0A++++%7D%0A%7D%0A%0Afn+pick_last_name_pattern%28rng%3A+%26mut+impl+Rng%29+-%3E+LastNamePattern+%7B%0A++++let+weights+%3D+LAST_NAME_PATTERNS.iter%28%29.map%28%7C%28_%2C+w%29%7C+*w%29%3B%0A++++let+dist+%3D+WeightedIndex%3A%3Anew%28weights%29.expect%28%22invalid+pattern+weights%22%29%3B%0A++++LAST_NAME_PATTERNS%5Bdist.sample%28rng%29%5D.0%0A%7D%0A%0Afn+pick_epithet_pattern%28rng%3A+%26mut+impl+Rng%29+-%3E+EpithetPattern+%7B%0A++++let+weights+%3D+EPITHET_PATTERNS.iter%28%29.map%28%7C%28_%2C+w%29%7C+*w%29%3B%0A++++let+dist+%3D+WeightedIndex%3A%3Anew%28weights%29.expect%28%22invalid+epithet+pattern+weights%22%29%3B%0A++++EPITHET_PATTERNS%5Bdist.sample%28rng%29%5D.0%0A%7D%0A%0Afn+pick_society_pattern%28rng%3A+%26mut+impl+Rng%29+-%3E+SocietyPattern+%7B%0A++++let+weights+%3D+SOCIETY_PATTERNS.iter%28%29.map%28%7C%28_%2C+w%29%7C+*w%29%3B%0A++++let+dist+%3D+WeightedIndex%3A%3Anew%28weights%29.expect%28%22invalid+society+pattern+weights%22%29%3B%0A++++SOCIETY_PATTERNS%5Bdist.sample%28rng%29%5D.0%0A%7D%0A%0A%2F*+-----------------------------%0A+++Capitalization+Functions%0A--------------------------------+*%2F%0A%0Afn+capitalize%28s%3A+%26str%29+-%3E+String+%7B%0A++++let+mut+chars+%3D+s.chars%28%29%3B%0A%0A++++match+chars.next%28%29+%7B%0A++++++++None+%3D%3E+String%3A%3Anew%28%29%2C%0A++++++++Some%28first%29+%3D%3E+%7B%0A++++++++++++let+first+%3D+first.to_uppercase%28%29.collect%3A%3A%3CString%3E%28%29%3B%0A++++++++++++let+rest+%3D+chars.as_str%28%29.to_lowercase%28%29%3B%0A++++++++++++format%21%28%22%7Bfirst%7D%7Brest%7D%22%29%0A++++++++%7D%0A++++%7D%0A%7D%0A%0Afn+capitalize_full_name%28name%3A+%26str%29+-%3E+String+%7B%0A++++name.split_whitespace%28%29%0A++++++++.map%28capitalize%29%0A++++++++.collect%3A%3A%3CVec%3C_%3E%3E%28%29%0A++++++++.join%28%22+%22%29%0A%7D%0A%0A%2F*+-----------------------------%0A+++Name+Generation+Proper%0A--------------------------------+*%2F%0A%0Afn+pick_first_name%3C%27a%3E%28rng%3A+%26mut+impl+Rng%2C+gender%3A+Gender%29+-%3E+%26%27a+str+%7B%0A++++match+gender+%7B%0A++++++++Gender%3A%3AMale+%3D%3E+pick%28rng%2C+FIRST_MALE%29%2C%0A++++++++Gender%3A%3AFemale+%3D%3E+pick%28rng%2C+FIRST_FEMALE%29%2C%0A++++++++Gender%3A%3ANonbinary+%3D%3E+pick%28rng%2C+FIRST_NONBINARY%29%2C%0A++++%7D%0A%7D%0A%0Afn+pick_honorific%28rng%3A+%26mut+impl+Rng%2C+gender%3A+Gender%29+-%3E+%26str+%7B%0A++++match+gender+%7B%0A++++++++Gender%3A%3AMale+%3D%3E+pick%28rng%2C+HONORIFIC_MALE%29%2C%0A++++++++Gender%3A%3AFemale+%3D%3E+pick%28rng%2C+HONORIFIC_FEMALE%29%2C%0A++++++++Gender%3A%3ANonbinary+%3D%3E+pick%28rng%2C+HONORIFIC_NONBINARY%29%2C%0A++++%7D%0A%7D%0A%0Afn+generate_society_name%28rng%3A+%26mut+impl+Rng%29+-%3E+String+%7B%0A++++match+pick_society_pattern%28rng%29+%7B%0A++++++++SocietyPattern%3A%3AColorNoun+%3D%3E+%7B%0A++++++++++++let+color+%3D+pick%28rng%2C+COLORS%29%3B%0A++++++++++++let+noun+%3D+pick_distinct%28rng%2C+SOCIETY_NOUNS%2C+color%29%3B%0A++++++++++++format%21%28%22%7B%7D+%7B%7D%22%2C+capitalize%28color%29%2C+capitalize%28noun%29%29%0A++++++++%7D%0A++++++++SocietyPattern%3A%3ADescriptorNoun+%3D%3E+%7B%0A++++++++++++let+descriptor+%3D+pick%28rng%2C+SOCIETY_DESCRIPTORS%29%3B%0A++++++++++++let+noun+%3D+pick_distinct%28rng%2C+SOCIETY_NOUNS%2C+descriptor%29%3B%0A++++++++++++format%21%28%22%7Bdescriptor%7D+%7B%7D%22%2C+capitalize%28noun%29%29%0A++++++++%7D%0A++++++++SocietyPattern%3A%3ANounOfNoun+%3D%3E+%7B%0A++++++++++++let+noun1+%3D+pick%28rng%2C+SOCIETY_NOUNS%29%3B%0A++++++++++++let+noun2+%3D+pick_distinct%28rng%2C+SOCIETY_NOUNS%2C+noun1%29%3B%0A++++++++++++format%21%28%22%7B%7D+of+%7B%7D%22%2C+capitalize%28noun1%29%2C+capitalize%28noun2%29%29%0A++++++++%7D%0A++++++++SocietyPattern%3A%3ATypeOfTheNoun+%3D%3E+%7B%0A++++++++++++let+society_type+%3D+pick%28rng%2C+SOCIETY_TYPES%29%3B%0A++++++++++++let+noun+%3D+pick%28rng%2C+SOCIETY_NOUNS%29%3B%0A++++++++++++format%21%28%22%7Bsociety_type%7D+of+the+%7B%7D%22%2C+capitalize%28noun%29%29%0A++++++++%7D%0A++++++++SocietyPattern%3A%3ATypeOfDescriptor+%3D%3E+%7B%0A++++++++++++let+society_type+%3D+pick%28rng%2C+SOCIETY_TYPES%29%3B%0A++++++++++++let+descriptor+%3D+pick%28rng%2C+SOCIETY_DESCRIPTORS%29%3B%0A++++++++++++format%21%28%22%7Bsociety_type%7D+of+the+%7Bdescriptor%7D%22%29%0A++++++++%7D%0A++++%7D%0A%7D%0A%0Afn+generate_epithet%28rng%3A+%26mut+impl+Rng%29+-%3E+String+%7B%0A++++match+pick_epithet_pattern%28rng%29+%7B%0A++++++++EpithetPattern%3A%3ATheDescriptor+%3D%3E+%7B%0A++++++++++++let+descriptor+%3D+pick%28rng%2C+EPITHET_DESCRIPTORS%29%3B%0A++++++++++++format%21%28%22the+%7B%7D%22%2C+capitalize%28descriptor%29%29%0A++++++++%7D%0A++++++++EpithetPattern%3A%3ATheAnimal+%3D%3E+%7B%0A++++++++++++let+animal+%3D+pick%28rng%2C+ANIMALS%29%3B%0A++++++++++++format%21%28%22the+%7B%7D%22%2C+capitalize%28animal%29%29%0A++++++++%7D%0A++++++++EpithetPattern%3A%3ATheOccupation+%3D%3E+%7B%0A++++++++++++let+occupation+%3D+pick%28rng%2C+OCCUPATIONS%29%3B%0A++++++++++++format%21%28%22the+%7B%7D%22%2C+capitalize%28occupation%29%29%0A++++++++%7D%0A++++++++EpithetPattern%3A%3AOfTheNoun+%3D%3E+%7B%0A++++++++++++let+place+%3D+pick%28rng%2C+EPITHET_PLACES%29%3B%0A++++++++++++format%21%28%22of+the+%7Bplace%7D%22%29%0A++++++++%7D%0A++++++++EpithetPattern%3A%3ANounOfThePlace+%3D%3E+%7B%0A++++++++++++let+noun+%3D+pick%28rng%2C+EPITHET_NOUNS%29%3B%0A++++++++++++let+place+%3D+pick%28rng%2C+EPITHET_PLACES%29%3B%0A++++++++++++format%21%28%22%7B%7D+of+the+%7B%7D%22%2C+capitalize%28noun%29%2C+capitalize%28place%29%29%0A++++++++%7D%0A++++++++EpithetPattern%3A%3ADescriptorOccupation+%3D%3E+%7B%0A++++++++++++let+descriptor+%3D+pick%28rng%2C+EPITHET_DESCRIPTORS%29%3B%0A++++++++++++let+occupation+%3D+pick%28rng%2C+OCCUPATIONS%29%3B%0A++++++++++++format%21%28%22%7Bdescriptor%7D+%7B%7D%22%2C+capitalize%28occupation%29%29%0A++++++++%7D%0A++++++++EpithetPattern%3A%3ANounOfTheSociety+%3D%3E+%7B%0A++++++++++++let+noun+%3D+pick%28rng%2C+EPITHET_NOUNS%29%3B%0A++++++++++++let+society+%3D+generate_society_name%28rng%29%3B%0A++++++++++++format%21%28%22%7B%7D+of+the+%7Bsociety%7D%22%2C+capitalize%28noun%29%29%0A++++++++%7D%0A++++++++EpithetPattern%3A%3AOfTheSociety+%3D%3E+%7B%0A++++++++++++let+society+%3D+generate_society_name%28rng%29%3B%0A++++++++++++format%21%28%22of+the+%7Bsociety%7D%22%29%0A++++++++%7D%0A++++%7D%0A%7D%0A%0Afn+generate_last_name%28rng%3A+%26mut+impl+Rng%29+-%3E+String+%7B%0A++++match+pick_last_name_pattern%28rng%29+%7B%0A++++++++LastNamePattern%3A%3AColorAnimal+%3D%3E+%7B%0A++++++++++++let+color+%3D+pick%28rng%2C+COLORS%29%3B%0A++++++++++++let+animal+%3D+pick_distinct%28rng%2C+ANIMALS%2C+color%29%3B%0A++++++++++++format%21%28%22%7Bcolor%7D%7Banimal%7D%22%29%0A++++++++%7D%0A++++++++LastNamePattern%3A%3AAnimalOccupation+%3D%3E+%7B%0A++++++++++++let+animal+%3D+pick%28rng%2C+ANIMALS%29%3B%0A++++++++++++let+job+%3D+pick_distinct%28rng%2C+OCCUPATIONS%2C+animal%29%3B%0A++++++++++++format%21%28%22%7Banimal%7D%7Bjob%7D%22%29%0A++++++++%7D%0A++++++++LastNamePattern%3A%3AColorOccupation+%3D%3E+%7B%0A++++++++++++let+color+%3D+pick%28rng%2C+COLORS%29%3B%0A++++++++++++let+job+%3D+pick_distinct%28rng%2C+OCCUPATIONS%2C+color%29%3B%0A++++++++++++format%21%28%22%7Bcolor%7D%7Bjob%7D%22%29%0A++++++++%7D%0A++++++++LastNamePattern%3A%3ADescriptorAnimal+%3D%3E+%7B%0A++++++++++++let+description+%3D+pick%28rng%2C+DESCRIPTORS%29%3B%0A++++++++++++let+animal+%3D+pick_distinct%28rng%2C+ANIMALS%2C+description%29%3B%0A++++++++++++format%21%28%22%7Bdescription%7D%7Banimal%7D%22%29%0A++++++++%7D%0A++++++++LastNamePattern%3A%3ADescriptorOccupation+%3D%3E+%7B%0A++++++++++++let+description+%3D+pick%28rng%2C+DESCRIPTORS%29%3B%0A++++++++++++let+job+%3D+pick_distinct%28rng%2C+OCCUPATIONS%2C+description%29%3B%0A++++++++++++format%21%28%22%7Bdescription%7D%7Bjob%7D%22%29%0A++++++++%7D%0A++++++++LastNamePattern%3A%3AColorEnd+%3D%3E+%7B%0A++++++++++++let+color+%3D+pick%28rng%2C+COLORS%29%3B%0A++++++++++++let+end+%3D+pick_distinct%28rng%2C+ENDS%2C+color%29%3B%0A++++++++++++format%21%28%22%7Bcolor%7D%7Bend%7D%22%29%0A++++++++%7D%0A++++++++LastNamePattern%3A%3AAnimalEnd+%3D%3E+%7B%0A++++++++++++let+animal+%3D+pick%28rng%2C+ANIMALS%29%3B%0A++++++++++++let+end+%3D+pick_distinct%28rng%2C+ENDS%2C+animal%29%3B%0A++++++++++++format%21%28%22%7Banimal%7D%7Bend%7D%22%29%0A++++++++%7D%0A++++++++LastNamePattern%3A%3ADescriptorNoun+%3D%3E+%7B%0A++++++++++++let+descriptor+%3D+pick%28rng%2C+DESCRIPTORS%29%3B%0A++++++++++++let+noun+%3D+pick_distinct%28rng%2C+NOUNS%2C+descriptor%29%3B%0A++++++++++++format%21%28%22%7Bdescriptor%7D%7Bnoun%7D%22%29%0A++++++++%7D%0A++++++++LastNamePattern%3A%3AColorNoun+%3D%3E+%7B%0A++++++++++++let+color+%3D+pick%28rng%2C+COLORS%29%3B%0A++++++++++++let+noun+%3D+pick_distinct%28rng%2C+NOUNS%2C+color%29%3B%0A++++++++++++format%21%28%22%7Bcolor%7D%7Bnoun%7D%22%29%0A++++++++%7D%0A++++++++LastNamePattern%3A%3ASingleSurname+%3D%3E+%7B%0A++++++++++++let+fact+%3D+random%28%29%3B%0A++++++++++++let+surname+%3D+if+fact+%7B%0A++++++++++++++++pick%28rng%2C+SURNAME_SINGLE%29%0A++++++++++++%7D+else+%7B%0A++++++++++++++++pick%28rng%2C+OCCUPATIONS%29%0A++++++++++++%7D%3B%0A++++++++++++format%21%28%22%7Bsurname%7D%22%29%0A++++++++%7D%0A++++%7D%0A%7D%0A%0Afn+generate_name%28rng%3A+%26mut+impl+Rng%2C+gender%3A+Gender%29+-%3E+String+%7B%0A++++let+first+%3D+pick_first_name%28rng%2C+gender%29%3B%0A++++let+last+%3D+generate_last_name%28rng%29%3B%0A++++let+mut+name+%3D+capitalize_full_name%28%26format%21%28%22%7Bfirst%7D+%7Blast%7D%22%29%29%3B%0A++++%0A++++%2F%2F+25%25+chance+for+honorific%0A++++if+rng.random_bool%280.25%29+%7B%0A++++++++let+honorific+%3D+pick_honorific%28rng%2C+gender%29%3B%0A++++++++name+%3D+format%21%28%22%7Bhonorific%7D+%7Bname%7D%22%29%3B%0A++++%7D%0A++++%0A++++%2F%2F+25%25+chance+for+epithet%0A++++if+rng.random_bool%280.25%29+%7B%0A++++++++let+epithet+%3D+generate_epithet%28rng%29%3B%0A++++++++name+%3D+format%21%28%22%7Bname%7D+%7Bepithet%7D%22%29%3B%0A++++%7D%0A++++%0A++++name%0A%7D%0A%0A%2F*+-----------------------------%0A+++Main+Function%0A--------------------------------+*%2F%0A%0Afn+main%28%29+%7B%0A++++let+mut+rng+%3D+rand%3A%3Arng%28%29%3B%0A%0A++++for+_+in+0..10+%7B%0A++++++++%2F%2FWe%27ll+do+kind+of+a+homemade+weighted+result+with+a+three+in+seven+chance+for+a+nonbinary+name+and+two+in+seven+for+binary+names%0A++++++++let+gender+%3D+match+rand%3A%3Arandom_range%280..6%29+%7B%0A++++++++++++1%7C2+%3D%3E+Gender%3A%3AMale%2C%0A++++++++++++3%7C4+%3D%3E+Gender%3A%3AFemale%2C%0A++++++++++++_+%3D%3E+Gender%3A%3ANonbinary%2C%0A++++++++%7D%3B%0A%0A++++++++let+name+%3D+generate_name%28%26mut+rng%2C+gender%29%3B%0A++++++++println%21%28%22%7Bname%7D%22%29%3B%0A++++%7D%0A%7D" height="600" width="550" title="Honorifics & Epiphets Code Player"></iframe>

{% endtab %}
{% endtabs %}
{% enddetails %}




## Conclusion

### Key Insights and Improvements to Impliment

Lastly, another improvement is that epithets are more often awarded and given rather than chosen. We could generate some sort of global stats to keep track of kill counts, type, travel, and more to give an update on the names of NPCs, things, and the player, depending on their actions. What's more, names tend to be somewhat geographic in the sense that certain names carry more weight in certain companies. We could link the given names from deeds/atrocities of a given biome or a group of beings, for example, you may be known as the conquer of the frozen depths, really, to the town on the edge of the frozen depths, the desert oasis town of Hotsville probably has never heard of such noble actions. While, from an individual standpoint, a scholar who travels and researches may have more of a chance to know you since they keep up with current events, just like a slime colony may have a name for you just for their own culture, since you keep slaying slimes. So a code system that might cross-reference those two level of epistemologies would results in an interesting recognition and perhaps furthermore a rumor system and even adjust names of being items through actions/use -check out my stats and attributes post where we give swords names and Trog the goblin becomes known for his legendary soup after he sells it 1000 times.
But that's a ramble for another day.

with ludonarrative love,
Alix


