export interface ContentType {
  _id: string;
  content?: string;
  list?: string[];
}

export interface BlogPostType {
  id: string;
  title: string;
  excerpt: string;
  content: ContentType[];
  image: string;
  author: string;
  date: string;
  image2: string;
}
import img from "../../../assets/images/tripitaka2.jpg";
import img2 from "../../../assets/images/tripitaka.jpg";
import img3 from "../../../assets/images/landing/history_landing.webp";
import img4 from "../../../assets/images/img10.jpg";
import img5 from "../../../assets/images/rock.jpg";
import img6 from "../../../assets/images/img9.png";
import img7 from "../../../assets/images/ContactNav.jpg";
import img8 from "../../../assets/images/img11.png";

export const blogPosts: BlogPostType[] = [
  {
    id: "1",
    title:
      "Aluvihare and the Sacred History of the Thripitakaya: A Legacy Carved in Stone",
    excerpt: "Explore the sacred legacy of Aluvihara...",
    content: [
      {
        _id: "p1",
        content:
          "Nestled among the serene hills of Matale in Sri Lanka lies Aluvihare Rock Temple, a sacred site of profound historical and spiritual importance. While the temple itself is a testament to ancient Buddhist architecture and devotion, it holds a deeper significance in the chronicles of Buddhist heritage—it is the revered location where the Thripitakaya (or Tipitaka) was first committed to writing.",
      },
      {
        _id: "p2h",
        content: "What is the Thripitakaya?",
      },
      {
        _id: "p2",
        content:
          'The Thripitakaya, meaning "Three Baskets," is the canonical collection of teachings of the Buddha. It is the foundation of Theravāda Buddhism, consisting of three main sections:',
      },
      {
        _id: "p2bh",
        content: " Vinaya Pitaka",
      },
      {
        _id: "p2bc",
        content: " (the rules of monastic discipline),",
      },
      {
        _id: "p2bh2",
        content: " Sutta Pitaka",
      },
      {
        _id: "p2bc2",
        content: " (the sermons and discourses of the Buddha),",
      },
      {
        _id: "p2bh3",
        content: " Abhidhamma Pitaka",
      },
      {
        _id: "p2bc3",
        content:
          " (the philosophical and psychological analysis of Buddhist doctrine).",
      },
      {
        _id: "p2c",
        content:
          "Before the Thripitakaya was ever written down, it was preserved through a rich oral tradition, passed down faithfully by monks across generations.",
      },
      {
        _id: "p3h",
        content: "The Turning Point at Aluvihare",
      },
      {
        _id: "p3",
        content:
          "The Aluvihare Rock Temple is etched into Buddhist history due to a pivotal event in the 1st century BCE. During the reign of King Walagamba, Sri Lanka faced political unrest and famine. Realizing the fragility of oral tradition amid such chaos, the king sought to preserve the Dhamma in a more permanent form.",
      },
      {
        _id: "p4",
        content:
          "Thus, in the quiet caves of Aluvihare, a monumental task began. Buddhist monks, under royal patronage, meticulously transcribed the oral teachings of the Buddha onto ola palm leaves. This sacred transcription marked the first time in history that the Thripitakaya was written down, securing it for future generations.",
      },
      {
        _id: "p5h",
        content: "Legacy of the Written Dhamma",
      },
      {
        _id: "p5",
        content:
          "The preservation of the Thripitakaya in written form was not just a scholarly achievement—it was a spiritual safeguard for the Dhamma itself. It ensured that the teachings of the Buddha would remain intact despite war, famine, or the passage of time. Today, Aluvihare Temple remains a revered pilgrimage site for Buddhists and history enthusiasts alike. The temple’s ancient caves still house replicas and preserved remnants of the original manuscripts, allowing visitors to witness a living link to the origins of Buddhist literature.",
      },
      {
        _id: "p6h",
        content: "Why Aluvihare Still Matters",
      },
      {
        _id: "p6",
        content:
          "Aluvihare is not just a temple; it is a symbol of intellectual and spiritual resilience. In an age where wisdom was preserved by word of mouth, the monks at Aluvihare made the courageous and visionary decision to inscribe the words of the Enlightened One onto stone and leaf. As we stand before the weathered rocks and tranquil halls of the Aluvihare Rock Temple, we are reminded of the sacred duty carried out within these walls—the protection of the Thripitakaya, the beating heart of Theravāda Buddhism. Whether you’re a pilgrim, a historian, or a curious traveler, Aluvihare invites you to explore its sacred grounds and connect with the spiritual legacy that echoes through its ancient stones.",
      },
    ],
    image: img,
    author: "Sumangala Thero",
    date: "2 June 2025",
    image2: img2,
  },
  {
    id: "2",
    title:
      "The Sacred Legacy of Matale Aluvihare: A Gem Among Temples in Sri Lanka",
    excerpt: "A Gem Among Temples in Sri Lanka...",
    content: [
      {
        _id: "p1",
        content:
          "Nestled amidst the lush hills of Matale, Aluvihare Rock Temple stands as a timeless symbol of Sri Lanka’s spiritual and cultural heritage. Revered as one of the most significant temples in Sri Lanka, Aluvihare is not just a place of worship—it's a sanctuary of history, wisdom, and devotion.",
      },
      {
        _id: "p2h",
        content: "A Sacred Chronicle",
      },
      {
        _id: "p2",
        content:
          "Aluvihare Rock Temple, also known as Aluvihare Purana Viharaya, dates back to the reign of King Devanampiyatissa in the 3rd century BCE. However, it rose to historical prominence during the 1st century BCE under King Valagamba. Faced with the threat of losing the oral Buddhist teachings during foreign invasions, the king and the monastic community chose Aluvihare as the sacred site to write down the Tripitaka (Buddhist scriptures) for the first time.",
      },
      {
        _id: "p2c",
        content:
          "This monumental act preserved the heart of Theravāda Buddhism and changed the course of religious history.",
      },
      {
        _id: "p3h",
        content: "More Than Just a Temple",
      },
      {
        _id: "p3b",
        content:
          "What makes Aluvihare truly unique among the temples in Sri Lanka is its blend of spirituality and scholarship. As you explore its cave temples, you’ll encounter ancient murals, inscriptions on rock, and statues of the Buddha, each telling stories from centuries past. The natural rock formations of the temple, combined with the tranquil surroundings, provide a meditative atmosphere for pilgrims and tourists alike.",
      },
      {
        _id: "p4h",
        content: "A Must-Visit for History and Culture Enthusiasts",
      },
      {
        _id: "p4",
        content:
          "Whether you’re a local pilgrim or an international traveler, visiting Aluvihare offers a deeper understanding of Sri Lanka’s religious journey. It’s a key destination on the cultural map of the island, frequently featured among must-see temples in Sri Lanka. Walking through the temple grounds, one can sense the silent echo of monks reciting sutras, the chisel marks on stone tablets, and the enduring presence of the Dharma.",
      },
      {
        _id: "p5h",
        content: "Preserving a Living Heritage",
      },
      {
        _id: "p5",
        content:
          "Today, Aluvihare continues to be a center of learning and devotion. Efforts are being made to preserve its ancient texts, protect its sacred structures, and share its story with the world. The temple also plays a vital role in Buddhist education and meditation retreats, making it a living, breathing part of Sri Lanka’s spiritual life.",
      },
      {
        _id: "p6h",
        content: "Plan Your Visit",
      },
      {
        _id: "p6",
        content:
          "If you’re exploring the cultural triangle of Sri Lanka, make sure to include Mathale Aluvihare on your itinerary. Whether you come seeking spiritual insight, historical knowledge, or peaceful contemplation, Aluvihare welcomes all with open arms. Aluvihare Rock Temple is not just a monument—it's a guardian of tradition and a beacon among the temples of Sri Lanka.",
      },
    ],
    image: img3,
    author: "Sumangala Thero",
    date: "2 June 2025",
    image2: img4,
  },
  {
    id: "3",
    title:
      "Discover the Cave Wisdom of Aluvihare: Where History and Spirituality Unite",
    excerpt: "Where History and Spirituality Unite...",
    content: [
      {
        _id: "p1",
        content:
          "The Aluvihare Rock Temple in Mathale stands as a sacred fusion of nature, history, and faith. Unlike many modern temples, this ancient site preserves the true essence of Buddhist heritage hidden in its temple caves and etched into Ola Leaf manuscripts",
      },
      {
        _id: "p2h",
        content: "A Sanctuary of Silence and Knowledge",
      },
      {
        _id: "p2",
        content:
          "Within the natural stone formations of Aluvihare, monks of old found the perfect refuge to commit the Buddha's teachings to writing. These cave temples became the silent guardians of the Thiripitaka, where each Ola Leaf held the promise of preserving the Dhamma in times of chaos.",
      },
      {
        _id: "p2c",
        content:
          "The result was more than scripture it was a cultural revolution. The act of recording the Tripitaka made Aluvihare Rock Temple a cornerstone among Sri Lanka Buddhist temples.",
      },
      {
        _id: "p3h",
        content: "Why This Temple Still Matters",
      },
      {
        _id: "p3",
        content:
          "Today, the Aluvihare Rock Temple history and significance continue to inspire. As one of the oldest religious sites of Mathale, it offers a rare look at ancient ola leaf manuscripts, wall paintings, and the very caves used over 2,000 years ago.",
      },
      {
        _id: "p4",
        content:
          "Whether you're a spiritual seeker, a student of history, or a traveler in search of deeper meaning, Aluvihare provides an unforgettable journey into Buddhist legacy.",
      },
      {
        _id: "p5h",
        content: "Visit Aluvihare Rock Temple in Matale ",
      },
      {
        _id: "p5",
        content:
          "This isn't just a tourist stop it's a sacred Buddhist site. If you're wondering where to get ola leafs or simply wish to understand the profound importance of Tipitaka History, Aluvihare Rock Temple is the place to begin",
      },
    ],
    image: img5,
    author: "Sumangala Thero",
    date: "11 June 2025",
    image2: img6,
  },
  {
    id: "4",
    title:
      "Walking with the Ancients: Exploring the Timeless Spirit of Aluvihare Rock Temple",
    excerpt: "Exploring the Timeless Spirit of Aluvihare Rock Temple...",
    content: [
      {
        _id: "p1",
        content:
          "High above the bustling streets of Matale, the Aluvihare Rock Temple rises in quiet dignity a silent sentinel of Sri Lanka’s spiritual and cultural story. Known across the island as one of the most revered Sri Lanka Buddhist temples, this sacred site offers more than scenic beauty or ancient artifacts; it offers a chance to walk the very paths where the Buddha’s words were preserved for eternity",
      },
      {
        _id: "p2h",
        content: "Aluvihare: The Spiritual Heart of Matale",
      },
      {
        _id: "p2",
        content:
          "The town of Matale Aluvihare is more than a stop on the map. It is a destination for reflection, reverence, and reconnection. Here, nestled within rocky hills and lush forest, lies a cultural heritage site in Matale that holds the spirit of the Thiripitaka (also known as Tripitaka or Tipitaka) in every stone and scroll.",
      },
      {
        _id: "p2c",
        content:
          "Visitors to Aluvihare are greeted by serene cave temples, intricate Buddhist murals, and relics that date back over 2,000 years. These are not merely decorations they are part of a living narrative, one that connects modern travelers to the ancient monks who once etched the Dhamma onto Ola Leaf manuscripts.",
      },
      // {
      //   _id: "p3h",
      //   content: "The Turning Point at Aluvihare",
      // },
      // {
      //   _id: "p3",
      //   content:
      //     "The Aluvihare Rock Temple is etched into Buddhist history due to a pivotal event in the 1st century BCE. During the reign of King Walagamba, Sri Lanka faced political unrest and famine. Realizing the fragility of oral tradition amid such chaos, the king sought to preserve the Dhamma in a more permanent form.",
      // },
      {
        _id: "p3h",
        content: "Where the Words Became Eternal",
      },
      {
        _id: "p4a",
        content:
          "In the 1st century BCE, at a time when the Dhamma was at risk of being lost, the monks of Aluvihare supported by King Valagamba undertook a mission of profound significance. Using palm leaves as parchment and ancient tools as pens, they transcribed the entire Thiripitaka. This effort transformed Aluvihare Rock Temple into one of the most important religious sites of Mathale, safeguarding Buddhist wisdom for future generations.",
      },
      {
        _id: "p4",
        content:
          "Today, echoes of that effort remain. Reproductions of the original Ola Leaf manuscripts are still housed within the temple, offering a glimpse into a sacred literary legacy",
      },
      {
        _id: "p5h",
        content: "More Than History A Living Experience",
      },
      {
        _id: "p5",
        content:
          "Unlike many temples in Sri Lanka, Aluvihare is not only a monument of the past. It remains an active space for meditation, learning, and pilgrimage. From monks studying ancient texts to locals seeking blessings, the temple pulses with spiritual energy. If you're seeking an immersive experience among the religious sites of the Kandy district, Aluvihare offers a rare combination: historical depth and present-day devotion.",
      },
      {
        _id: "p6h",
        content: "Plan Your Pilgrimage",
      },
      {
        _id: "p6",
        content:
          "Whether you are a pilgrim tracing the path of the Enlightened One, a historian exploring Tipitaka History, or simply a traveler searching for meaning, Aluvihare Rock Temple in Matale is a destination that rewards both the curious and the faithful. Walk through the same Aluvihare cave temple where sacred teachings were once whispered and carved. Feel the cool stone beneath your feet and listen closely—you might just hear the past calling.",
      },
    ],
    image: img7,
    author: "Sumangala Thero",
    date: "11 June 2025",
    image2: img8,
  },
  // {
  //   id: "5",
  //   title: "A Sacred Journey: The History of Aluvihara Temple",
  //   excerpt: "Explore the sacred legacy of Aluvihara...",
  //   content: [
  //     {
  //       _id: "p1",
  //       content:
  //         "In the 1st century BCE, King Walagamba’s efforts to revive Buddhism played a crucial role in preserving the sacred Tipitaka. After regaining his throne from foreign invaders, the king commissioned the writing of the Buddhist scriptures on palm leaves at Aluvihara Temple, ensuring the survival of Buddhist teachings for future generations. This blog delves into his struggles and contributions to Sri Lankan Buddhism.",
  //     },
  //     {
  //       _id: "p2",
  //       content:
  //         "King Walagamba’s monumental contribution came in the form of commissioning the transcription of the sacred Tipitaka onto palm leaves. This painstaking endeavor ensured that the oral traditions of Buddhism were safeguarded for future generations. Aluvihara Temple became the epicenter of this effort, serving as a sanctuary where monks meticulously documented these scriptures. It was a spiritual renaissance born out of the king’s vision and dedication.",
  //     },
  //     {
  //       _id: "p3",
  //       content:
  //         "The king’s legacy reverberates through Sri Lanka’s religious and cultural heritage. His initiatives not only preserved Buddhist wisdom but also strengthened the nation’s identity. Aluvihara Temple stands as a testament to his commitment, inspiring admiration for his role in shaping history. King Walagamba’s contributions remain a shining example of leadership and devotion, bridging the past with the future of Buddhism.King Walagamba's revival efforts also emphasized the importance of nurturing monastic education and practice.",
  //     },
  //     {
  //       _id: "p4",
  //       content: "",
  //     },
  //   ],
  //   image: "/img/king.png",
  //   author: "Sumangala Thero",
  //   date: "20 March 2025",
  //   image2: "/img/king1.jpg",
  // },
];
