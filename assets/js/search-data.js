// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-dev-blog",
          title: "Dev Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "dropdown-bookshelf",
              title: "Bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-full-academic-blog-post-options-template",
        
          title: "Full Academic Blog Post Options Template",
        
        description: "A bunch of useful page tidbits",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/distill-copy/";
          
        },
      },{id: "books-50-years-of-text-games-amp-58-further-explorations",
          title: '50 Years of Text Games&amp;amp;#58; Further Explorations',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/50%20Years%20of%20Text%20Games%20Further%20Explorations%20copy/";
            },},{id: "books-50-years-of-text-games-amp-58-from-oregon-trail-to-a-i-dungeon",
          title: '50 Years of Text Games&amp;amp;#58; From Oregon Trail to A.I. Dungeon',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/50%20Years%20of%20Text%20Games/";
            },},{id: "books-ascii-sprites-and-symbolic-graphics-rogulike-celebration",
          title: 'ASCII, Sprites, and Symbolic Graphics (Rogulike Celebration)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/ASCII_Sprites_Symbolic_Graphics/";
            },},{id: "books-acade-game-typography",
          title: 'Acade Game Typography',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Arcade%20Game%20Typography/";
            },},{id: "books-baulder-39-s-gate-3",
          title: 'Baulder&amp;#39;s Gate 3',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/BaulderGate3/";
            },},{id: "books-boyfriend-dungeon",
          title: 'Boyfriend Dungeon',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/BoyfriendDungeon/";
            },},{id: "books-caves-of-qud",
          title: 'Caves Of Qud',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/CavesOfQud/";
            },},{id: "books-citizen-sleeper",
          title: 'Citizen Sleeper',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/CitizenSleeper1/";
            },},{id: "books-citizen-sleeper-2",
          title: 'Citizen Sleeper 2',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/CitizenSleeper2/";
            },},{id: "books-from-ascii-art-to-comic-sans",
          title: 'From ASCII Art to Comic Sans',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Cyberplay%20copy/";
            },},{id: "books-cyberpl-amp-64-y-amp-58-communicating-online",
          title: 'Cyberpl&amp;amp;#64;y&amp;amp;#58; Communicating Online',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Cyberplay/";
            },},{id: "books-designing-trans-characters-for-positivity",
          title: 'Designing Trans Characters for Positivity',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Designing%20Trans%20Characters%20for%20Positivity/";
            },},{id: "books-hades-ii",
          title: 'Hades II',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/HadesII/";
            },},{id: "books-haven",
          title: 'Haven',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Haven/";
            },},{id: "books-inkenfell",
          title: 'Inkenfell',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Inkenfell/";
            },},{id: "books-the-making-of-dwarf-fortress",
          title: 'The Making of Dwarf Fortress',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Making_of_Dwarf_Fortress/";
            },},{id: "books-procedural-generation-in-game-design",
          title: 'Procedural Generation in Game Design',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Procedural_Generation_in_Game_Design/";
            },},{id: "books-procedural-storytelling-in-game-design",
          title: 'Procedural Storytelling in Game Design',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Procedural_Storytelling_in_Game_Design/";
            },},{id: "books-queer-amp-58-a-graphic-guide",
          title: 'Queer&amp;amp;#58; A Graphic Guide',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Queer_a_Graphic_Guide/";
            },},{id: "books-rainbow-arcade-over-30-years-of-queer-video-game-history",
          title: 'Rainbow Arcade over 30 Years of Queer Video Game History',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Rainbow%20Arcade/";
            },},{id: "books-roguelike-radio-episode-83-amp-58-ascii",
          title: 'Roguelike Radio - Episode 83&amp;amp;#58; ASCII',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Roguelike_Radio_ASCII/";
            },},{id: "books-roguelike-radio-episode-163-amp-58-interview-with-tanya-x-short",
          title: 'Roguelike Radio - Episode 163&amp;amp;#58; Interview with Tanya X. Short',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Roguelike_Radio_Interview_TanyaX/";
            },},{id: "books-roguelike-radio-episode-155-amp-58-magic-systems",
          title: 'Roguelike Radio - Episode 155&amp;amp;#58; Magic Systems',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Roguelike_Radio_Magic/";
            },},{id: "books-shifting-genres-amp-58-limits-of-video-game-genre-taxonomy-in-roguelikes",
          title: 'Shifting Genres&amp;amp;#58; Limits of Video Game Genre Taxonomy in Roguelikes',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Shifting_Genres_TaxonomyRoguelikes/";
            },},{id: "books-slay-the-princess",
          title: 'Slay The Princess',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/SlayThePrincess/";
            },},{id: "books-the-three-wise-monkeys-of-research-amp-58-epistemology-ontology-methodology",
          title: 'The Three Wise Monkeys of Research&amp;amp;#58; Epistemology, Ontology, Methodology',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The%20Three%20Wise%20Monkeys%20of%20Research:%20Epistemology,%20Ontology,%20Methodology%20/";
            },},{id: "books-the-use-of-ascii-graphics-in-roguelikes-amp-58-aesthetic-nostalgia-and-semiotic-difference",
          title: 'The Use of ASCII Graphics in Roguelikes&amp;amp;#58; Aesthetic Nostalgia and Semiotic Difference',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The%20Use%20of%20ASCII%20Graphics%20in%20Roguelikes/";
            },},{id: "books-the-big-reveal-amp-58-exploring-trans-femininity-in-metroid",
          title: 'The Big Reveal&amp;amp;#58; Exploring Trans Femininity in Metroid',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/TransFemininity_in_Metroid/";
            },},{id: "books-world-builders-on-world-building",
          title: 'World-Builders on World-Building',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/World-Builders_on_World-Building/";
            },},{id: "news-new-website-is-live-and-i-m-working-out-some-of-the-wrinkles-sparkles-blush",
          title: 'New website is live, and I’m working out some of the wrinkles! :sparkles:...',
          description: "",
          section: "News",},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/nerdess.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%70%6C%65%6F%6E%68%61%72%74@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/nerdessmusic", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/aleonhart", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
