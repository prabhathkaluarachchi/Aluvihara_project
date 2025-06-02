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
        _id: "p2",
        content:
          'What is the Thripitakaya? The Thripitakaya, meaning "Three Baskets," is the canonical collection of teachings of the Buddha. It is the foundation of Theravāda Buddhism, consisting of three main sections:',
      },
      {
        _id: "p2b",
        list: [
          "Vinaya Pitaka – the rules of monastic discipline.",
          "Sutta Pitaka – the sermons and discourses of the Buddha.",
          "Abhidhamma Pitaka – the philosophical and psychological analysis of Buddhist doctrine.",
        ],
      },
      {
        _id: "p2c",
        content:
          "Before the Thripitakaya was ever written down, it was preserved through a rich oral tradition, passed down faithfully by monks across generations.",
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
        _id: "p5",
        content:
          "The preservation of the Thripitakaya in written form was not just a scholarly achievement—it was a spiritual safeguard for the Dhamma itself. It ensured that the teachings of the Buddha would remain intact despite war, famine, or the passage of time. Today, Aluvihare Temple remains a revered pilgrimage site for Buddhists and history enthusiasts alike. The temple’s ancient caves still house replicas and preserved remnants of the original manuscripts, allowing visitors to witness a living link to the origins of Buddhist literature.",
      },
      {
        _id: "p6",
        content:
          "Aluvihare is not just a temple; it is a symbol of intellectual and spiritual resilience. In an age where wisdom was preserved by word of mouth, the monks at Aluvihare made the courageous and visionary decision to inscribe the words of the Enlightened One onto stone and leaf. As we stand before the weathered rocks and tranquil halls of the Aluvihare Rock Temple, we are reminded of the sacred duty carried out within these walls—the protection of the Thripitakaya, the beating heart of Theravāda Buddhism. Whether you’re a pilgrim, a historian, or a curious traveler, Aluvihare invites you to explore its sacred grounds and connect with the spiritual legacy that echoes through its ancient stones.",
      },
    ],
    image: "/img/king.png",
    author: "Sumangala Thero",
    date: "2 June 2025",
    image2: "/img/king1.jpg",
  },
  {
    id: "2",
    title:
      "The Sacred Legacy of Matale Aluvihare: A Gem Among Temples in Sri Lanka",
    excerpt: "Explore the sacred legacy of Aluvihara...",
    content: [
      {
        _id: "p1",
        content:
          "Nestled amidst the lush hills of Matale, Aluvihare Rock Temple stands as a timeless symbol of Sri Lanka’s spiritual and cultural heritage. Revered as one of the most significant temples in Sri Lanka, Aluvihare is not just a place of worship—it's a sanctuary of history, wisdom, and devotion.",
      },
      {
        _id: "p2",
        content:
          "Aluvihare Rock Temple, also known as Aluvihare Purana Viharaya, dates back to the reign of King Devanampiyatissa in the 3rd century BCE. However, it rose to historical prominence during the 1st century BCE under King Valagamba. Faced with the threat of losing the oral Buddhist teachings during foreign invasions, the king and the monastic community chose Aluvihare as the sacred site to write down the Tripitaka (Buddhist scriptures) for the first time. This monumental act preserved the heart of Theravāda Buddhism and changed the course of religious history.",
      },
      {
        _id: "p3",
        content:
          "What makes Aluvihare truly unique among the temples in Sri Lanka is its blend of spirituality and scholarship. As you explore its cave temples, you’ll encounter ancient murals, inscriptions on rock, and statues of the Buddha, each telling stories from centuries past. The natural rock formations of the temple, combined with the tranquil surroundings, provide a meditative atmosphere for pilgrims and tourists alike.",
      },
      {
        _id: "p4",
        content:
          "Whether you’re a local pilgrim or an international traveler, visiting Aluvihare offers a deeper understanding of Sri Lanka’s religious journey. It’s a key destination on the cultural map of the island, frequently featured among must-see temples in Sri Lanka. Walking through the temple grounds, one can sense the silent echo of monks reciting sutras, the chisel marks on stone tablets, and the enduring presence of the Dharma.",
      },
      {
        _id: "p5",
        content:
          "Today, Aluvihare continues to be a center of learning and devotion. Efforts are being made to preserve its ancient texts, protect its sacred structures, and share its story with the world. The temple also plays a vital role in Buddhist education and meditation retreats, making it a living, breathing part of Sri Lanka’s spiritual life.",
      },
      {
        _id: "p6",
        content:
          "If you’re exploring the cultural triangle of Sri Lanka, make sure to include Mathale Aluvihare on your itinerary. Whether you come seeking spiritual insight, historical knowledge, or peaceful contemplation, Aluvihare welcomes all with open arms. Aluvihare Rock Temple is not just a monument—it's a guardian of tradition and a beacon among the temples of Sri Lanka.",
      },
    ],
    image: "/img/temple2.jpg",
    author: "Sumangala Thero",
    date: "2 June 2025",
    image2: "/img/king1.jpg",
  },
  {
    id: "3",
    title: "A Sacred Journey: The History of Aluvihara Temple",
    excerpt: "Explore the sacred legacy of Aluvihara...",
    content: [
      {
        _id: "p1",
        content:
          "In the 1st century BCE, King Walagamba’s efforts to revive Buddhism played a crucial role in preserving the sacred Tipitaka. After regaining his throne from foreign invaders, the king commissioned the writing of the Buddhist scriptures on palm leaves at Aluvihara Temple, ensuring the survival of Buddhist teachings for future generations. This blog delves into his struggles and contributions to Sri Lankan Buddhism.",
      },
      {
        _id: "p2",
        content:
          "King Walagamba’s monumental contribution came in the form of commissioning the transcription of the sacred Tipitaka onto palm leaves. This painstaking endeavor ensured that the oral traditions of Buddhism were safeguarded for future generations. Aluvihara Temple became the epicenter of this effort, serving as a sanctuary where monks meticulously documented these scriptures. It was a spiritual renaissance born out of the king’s vision and dedication.",
      },
      {
        _id: "p3",
        content:
          "The king’s legacy reverberates through Sri Lanka’s religious and cultural heritage. His initiatives not only preserved Buddhist wisdom but also strengthened the nation’s identity. Aluvihara Temple stands as a testament to his commitment, inspiring admiration for his role in shaping history. King Walagamba’s contributions remain a shining example of leadership and devotion, bridging the past with the future of Buddhism.King Walagamba's revival efforts also emphasized the importance of nurturing monastic education and practice.",
      },
      {
        _id: "p4",
        content:
          "He fostered an environment where Buddhist monks could study, meditate, and teach the Dharma with renewed vigor. By supporting monastic communities and establishing infrastructure for their growth, the king ensured that Buddhism not only survived but thrived in Sri Lanka. His reign symbolizes resilience and devotion, laying the foundation for the preservation and enrichment of Buddhist culture for centuries to come.",
      },
    ],
    image: "/img/temple.jpg",
    author: "Sumangala Thero",
    date: "20 March 2025",
    image2: "/img/king1.jpg",
  },
  {
    id: "4",
    title: "A Sacred Journey: The History of Aluvihara Temple",
    excerpt: "Explore the sacred legacy of Aluvihara...",
    content: [
      {
        _id: "p1",
        content:
          "In the 1st century BCE, King Walagamba’s efforts to revive Buddhism played a crucial role in preserving the sacred Tipitaka. After regaining his throne from foreign invaders, the king commissioned the writing of the Buddhist scriptures on palm leaves at Aluvihara Temple, ensuring the survival of Buddhist teachings for future generations. This blog delves into his struggles and contributions to Sri Lankan Buddhism.",
      },
      {
        _id: "p2",
        content:
          "King Walagamba’s monumental contribution came in the form of commissioning the transcription of the sacred Tipitaka onto palm leaves. This painstaking endeavor ensured that the oral traditions of Buddhism were safeguarded for future generations. Aluvihara Temple became the epicenter of this effort, serving as a sanctuary where monks meticulously documented these scriptures. It was a spiritual renaissance born out of the king’s vision and dedication.",
      },
      {
        _id: "p3",
        content:
          "The king’s legacy reverberates through Sri Lanka’s religious and cultural heritage. His initiatives not only preserved Buddhist wisdom but also strengthened the nation’s identity. Aluvihara Temple stands as a testament to his commitment, inspiring admiration for his role in shaping history. King Walagamba’s contributions remain a shining example of leadership and devotion, bridging the past with the future of Buddhism.King Walagamba's revival efforts also emphasized the importance of nurturing monastic education and practice.",
      },
      {
        _id: "p4",
        content:
          "He fostered an environment where Buddhist monks could study, meditate, and teach the Dharma with renewed vigor. By supporting monastic communities and establishing infrastructure for their growth, the king ensured that Buddhism not only survived but thrived in Sri Lanka. His reign symbolizes resilience and devotion, laying the foundation for the preservation and enrichment of Buddhist culture for centuries to come.",
      },
    ],
    image: "/img/king.jpg",
    author: "Sumangala Thero",
    date: "20 March 2025",
    image2: "/img/king1.jpg",
  },
  {
    id: "5",
    title: "A Sacred Journey: The History of Aluvihara Temple",
    excerpt: "Explore the sacred legacy of Aluvihara...",
    content: [
      {
        _id: "p1",
        content:
          "In the 1st century BCE, King Walagamba’s efforts to revive Buddhism played a crucial role in preserving the sacred Tipitaka. After regaining his throne from foreign invaders, the king commissioned the writing of the Buddhist scriptures on palm leaves at Aluvihara Temple, ensuring the survival of Buddhist teachings for future generations. This blog delves into his struggles and contributions to Sri Lankan Buddhism.",
      },
      {
        _id: "p2",
        content:
          "King Walagamba’s monumental contribution came in the form of commissioning the transcription of the sacred Tipitaka onto palm leaves. This painstaking endeavor ensured that the oral traditions of Buddhism were safeguarded for future generations. Aluvihara Temple became the epicenter of this effort, serving as a sanctuary where monks meticulously documented these scriptures. It was a spiritual renaissance born out of the king’s vision and dedication.",
      },
      {
        _id: "p3",
        content:
          "The king’s legacy reverberates through Sri Lanka’s religious and cultural heritage. His initiatives not only preserved Buddhist wisdom but also strengthened the nation’s identity. Aluvihara Temple stands as a testament to his commitment, inspiring admiration for his role in shaping history. King Walagamba’s contributions remain a shining example of leadership and devotion, bridging the past with the future of Buddhism.King Walagamba's revival efforts also emphasized the importance of nurturing monastic education and practice.",
      },
      {
        _id: "p4",
        content: "",
      },
    ],
    image: "/img/temple.jpg",
    author: "Sumangala Thero",
    date: "20 March 2025",
    image2: "/img/king1.jpg",
  },
];
