export interface ContentType {
  _id: string;
  content: string;
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
    title: "The Revival of Buddhism by King Walagamba",
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
    image: "/img/king.png",
    author: "Sumangala Thero",
    date: "20 March 2025",
    image2: "/img/king1.jpg",
  },
  {
    id: "2",
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
    image: "/img/temple2.jpg",
    author: "Sumangala Thero",
    date: "20 March 2025",
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
    image: "/img/temple2.jpg",
    author: "Sumangala Thero",
    date: "20 March 2025",
    image2: "/img/king1.jpg",
  },
];
