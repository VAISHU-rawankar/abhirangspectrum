import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import FAQ from '../components/FAQ';

const blogContent = {
  'graphology-traits': {
    category: "Graphology",
    title: "The Silent Language: What Your Handwriting Reveals About Your Character",
    author: "Abhirang Spectrum",
    date: "May 12, 2026",
    image: "/graphology_blog.png",
    intro: "Handwriting is more than just a way to record thoughts on paper. It is a powerful expression of the human mind and personality. The science of graphology, also known as handwriting analysis, studies the shapes, strokes, spacing, and movement of handwriting to reveal hidden personality traits. Every person’s handwriting is unique, much like a fingerprint. The way we form letters, the pressure we apply, and the spacing between words can reflect our emotional state, confidence levels, thinking patterns, and subconscious behaviors.",
    sections: [
      {
        title: "What is Graphology?",
        content: "Graphology is the systematic study of handwriting to understand psychological characteristics and personality traits. Experts analyze several handwriting elements including letter formation, size of writing, slant of letters, pressure applied to the paper, and spacing between words and lines. These features provide valuable insights into how a person thinks, reacts emotionally, and interacts with others."
      },
      {
        title: "How Handwriting Reflects Personality",
        subsections: [
          {
            name: "Letter Size",
            text: "Large handwriting often indicates confidence and outgoing personality traits. Individuals who write with large letters tend to enjoy attention and social interactions. Small handwriting, on the other hand, often reflects deep concentration, analytical thinking, and introverted tendencies."
          },
          {
            name: "Letter Slant",
            text: "The slant of handwriting reveals emotional expression. A right slant usually means the person is emotionally expressive and sociable. A left slant indicates someone reserved and independent. Straight writing reflects a logical and controlled personality."
          },
          {
            name: "Writing Pressure",
            text: "Heavy pressure indicates strong emotions, determination, and intensity. Light pressure usually reflects sensitivity, adaptability, and calm personality traits."
          }
        ]
      },
      {
        title: "Applications and Benefits",
        content: "Graphology is used in self-discovery, career guidance, and relationship understanding. It provides benefits like increased self-awareness, identification of behavioral strengths, and improved communication skills. At Abhirang Spectrum, we use it to guide individuals toward meaningful self-improvement."
      }
    ],
    conclusion: "Graphology is a fascinating science that reveals the silent language of the mind. By understanding handwriting patterns, individuals can gain valuable insights into their emotions and behavior. Handwriting is not just writing — it is a mirror of the subconscious mind.",
    faqs: [
      {
        question: "What does graphology analyze?",
        answer: "Graphology analyzes handwriting patterns such as letter size, spacing, slant, and pressure to understand personality traits and emotional states."
      },
      {
        question: "Is handwriting analysis accurate?",
        answer: "When performed by trained professionals, graphology is highly accurate in identifying behavioral and psychological patterns as it bypasses the conscious filters of the mind."
      },
      {
        question: "Can graphology predict the future?",
        answer: "No, graphology is not for fortune-telling. It focuses on understanding a person's current mindset, character, and subconscious tendencies."
      },
      {
        question: "Can it be used for business hiring?",
        answer: "Yes, many organizations use graphology for recruitment to ensure a candidate's personality traits align with the requirements of the job role."
      },
      {
        question: "Can handwriting analysis detect health issues?",
        answer: "While not a medical diagnosis tool, certain physical conditions can influence handwriting coordination, which an expert may notice as signs of physical or mental fatigue."
      },
      {
        question: "Does my handwriting change over time?",
        answer: "Yes, as our personality evolves and our emotional state shifts, subtle changes often appear in our handwriting strokes and patterns."
      }
    ]
  },
  'astrology-planets': {
    category: "Astrology",
    title: "Planetary Alignments: Navigating Life's Cycles with Ancient Astrology Wisdom",
    author: "Abhirang Spectrum",
    date: "May 10, 2026",
    image: "/astrology_blog.png",
    intro: "Astrology is one of the oldest sciences used to understand the relationship between cosmic movements and human life. For thousands of years, civilizations have studied planetary alignments to gain insight into personality traits, life patterns, and future opportunities. The foundation lies in the belief that planetary positions at birth influence an individual’s journey.",
    sections: [
      {
        title: "What is Vedic Astrology?",
        content: "Vedic astrology originates from ancient Indian scriptures known as the Vedas. It focuses on the position of planets within twelve zodiac signs and houses. Each planet represents a different aspect of life such as career, relationships, health, spiritual growth, and wealth."
      },
      {
        title: "The Role of Zodiac Signs",
        content: "The twelve zodiac signs each represent unique characteristics. For example, Aries represents leadership, Taurus symbolizes stability, and Gemini reflects curiosity. Understanding these energies helps individuals align their actions with natural strengths."
      },
      {
        title: "Astrology and Life Decisions",
        content: "Astrology provides guidance in career planning, relationship compatibility, and financial growth. Certain planetary combinations indicate opportunities for success, while others suggest phases for introspection and caution."
      }
    ],
    conclusion: "Astrology provides a powerful lens through which individuals can understand the deeper patterns shaping their lives. By interpreting cosmic energies, it offers guidance for navigating life’s challenges.",
    faqs: [
      {
        question: "How does a birth chart work?",
        answer: "A birth chart is a snapshot of the sky at your exact time and place of birth, acting as a cosmic map of your life's tendencies and timing."
      },
      {
        question: "What details are needed for a consultation?",
        answer: "You will need to provide your exact date of birth, time of birth (including minutes), and place of birth for an accurate chart calculation."
      },
      {
        question: "Is Vedic Astrology different from Western Astrology?",
        answer: "Yes, Vedic Astrology uses the Sidereal zodiac (linked to constellations) while Western uses the Tropical zodiac (linked to seasons). Vedic is often considered more destiny-oriented."
      },
      {
        question: "Can astrology change my destiny?",
        answer: "Astrology doesn't 'change' destiny, but it provides 'Upa-aya' (remedies) to mitigate negative influences and help you navigate challenges more effectively."
      },
      {
        question: "How often should I get an astrology reading?",
        answer: "A comprehensive reading once a year (on your birthday) or during major life transitions (career changes, marriage) is usually recommended."
      },
      {
        question: "Can it help in career transformation?",
        answer: "Absolutely. By analyzing your 10th house and Dasha (period), astrology can identify the right time and field for professional growth."
      }
    ]
  },
  'numerology-destiny': {
    category: "Numerology",
    title: "Decoding Destiny: Finding Your Life Path Through Sacred Numbers",
    author: "Abhirang Spectrum",
    date: "May 08, 2026",
    image: "/numerology_blog.png",
    intro: "Numbers have fascinated human civilizations for centuries. Beyond mathematics, numbers are believed to carry energetic vibrations that influence our personalities and paths. Numerology is the study of these vibrations and how they interact with our birth date and name.",
    sections: [
      {
        title: "What is Numerology?",
        content: "Numerology is based on the idea that numbers carry unique vibrational frequencies. The most important number is the Life Path Number, calculated using the date of birth, representing core personality and purpose."
      },
      {
        title: "Life Path Numbers",
        content: "Life Path 1 represents leadership and independence; Life Path 2 signifies cooperation and harmony; Life Path 3 focuses on creativity; and Life Path 4 emphasizes discipline and stability. Recognizing your number helps you understand your natural abilities."
      },
      {
        title: "Numerology and Growth",
        content: "Numerology can guide career choices, relationship compatibility, and even business naming. By aligning with positive numerical vibrations, individuals can attract better opportunities."
      }
    ],
    conclusion: "Numerology reveals the hidden power of numbers. By understanding numerical vibrations, individuals can align themselves with positive energy and fulfill their true potential.",
    faqs: [
      {
        question: "How do I find my Life Path Number?",
        answer: "It is calculated by adding the digits of your full birth date until you reach a single digit (unless it's a master number like 11 or 22)."
      },
      {
        question: "What is a Name Correction in numerology?",
        answer: "It involves slightly adjusting the spelling of your name to ensure its vibration matches your birth chart, helping attract more success and harmony."
      },
      {
        question: "Are some numbers luckier than others?",
        answer: "Numbers are not 'lucky' or 'unlucky' in a vacuum; they are either compatible or incompatible with your specific birth data."
      },
      {
        question: "Can numerology help with business success?",
        answer: "Yes, by choosing a business name that resonates with wealth and sustainability numbers, you can improve the vibration of your venture."
      },
      {
        question: "What are Master Numbers?",
        answer: "Numbers like 11, 22, and 33 are considered Master Numbers. They carry higher spiritual responsibility and powerful potential."
      },
      {
        question: "Does it work for name changes after marriage?",
        answer: "Yes, a name change shifts your vibration. Numerology can analyze how a new last name will impact your life path and personality."
      }
    ]
  },
  'vastu-harmony': {
    category: "Vastu Shastra",
    title: "The Architecture of Peace: Designing a Home That Heals",
    author: "Abhirang Spectrum",
    date: "May 05, 2026",
    image: "/vastu_blog.png",
    intro: "Your environment is an extension of your energy body. Vastu Shastra provides timeless principles to balance the five elements in your home—Earth, Water, Fire, Air, and Space—for health, wealth, and family harmony. Proper Vastu alignment can improve prosperity, health, and overall positivity.",
    sections: [
      {
        title: "What is Vastu Shastra?",
        content: "Vastu Shastra is an ancient Indian science that harmonizes living and working spaces with natural energies. It is based on the directional alignment of a structure to ensure that cosmic energy (Prana) flows freely and beneficial forces are maximized."
      },
      {
        title: "The Five Elements in Your Home",
        content: "Each direction in Vastu is associated with an element. North/East (Water), South/East (Fire), South/West (Earth), North/West (Air). Balancing these elements through room placement and color schemes promotes a healing environment."
      },
      {
        title: "Benefits of a Vastu-Aligned Space",
        content: "A Vastu-compliant home reduces stress, improves relationships, and fosters career growth. Small changes like furniture placement or light management can have a profound impact on resident well-being."
      }
    ],
    conclusion: "By understanding the architecture of peace, you can transform your home into a sanctuary that nurtures your soul and supports your success.",
    faqs: [
      {
        question: "Can Vastu work in a rented apartment?",
        answer: "Yes, many Vastu remedies are non-structural and involve color therapy, crystal placements, or furniture adjustments that don't violate rental agreements."
      },
      {
        question: "What are the most important directions in a house?",
        answer: "The North-East (Ishanya) is crucial for mental peace and prosperity, while the South-West (Nairutya) is key for stability and wealth."
      },
      {
        question: "Do I need to make structural changes for Vastu?",
        answer: "Not always. We specialize in 'Vastu without Demolition', using mirrors, colors, plants, and energy tools to correct imbalances."
      },
      {
        question: "Can Vastu help with financial growth?",
        answer: "Yes, by clearing blockages in the North direction (governed by Kubera), you can improve the flow of financial opportunities."
      },
      {
        question: "Is Vastu related to religion?",
        answer: "Vastu is an architectural science based on solar energy, magnetic fields, and the five elements; it works regardless of your faith."
      },
      {
        question: "How soon can I see results after Vastu remedies?",
        answer: "While energy shifts are immediate, physical manifestations usually become noticeable within 21 to 90 days."
      }
    ]
  },
  'reiki-distance': {
    category: "Reiki",
    title: "Quantum Healing: Understanding the Power of Reiki Energy Therapy",
    author: "Abhirang Spectrum",
    date: "May 02, 2026",
    image: "/reiki_blog.png",
    intro: "Reiki is a powerful energy healing technique that originated in Japan. It is based on the belief that life force energy flows through all living beings. When this energy becomes blocked, individuals may experience stress or imbalance. Reiki works by restoring this natural flow.",
    sections: [
      {
        title: "What is Quantum Reiki?",
        content: "Quantum Reiki combines traditional Reiki principles with modern energy concepts. It focuses on the multidimensional nature of healing, balancing the body’s energy system at a subatomic level to promote deep physical and spiritual well-being."
      },
      {
        title: "Benefits of Reiki Therapy",
        content: "Reiki sessions lead to stress reduction, emotional healing, improved mental clarity, and increased energy levels. It supports the body's natural ability to heal by clearing energetic static."
      }
    ],
    conclusion: "Quantum Reiki offers a gentle yet powerful approach to healing. By restoring balance within the body’s energy system, it promotes lasting harmony and vitality.",
    faqs: [
      {
        question: "Can Reiki be done from a distance?",
        answer: "Absolutely. In the quantum field, energy is not bound by physical distance, allowing healing to be just as effective remotely."
      },
      {
        question: "What does a Reiki session feel like?",
        answer: "Most people feel a deep sense of relaxation and warmth; some experience gentle tingling or a emotional release as blockages clear."
      },
      {
        question: "Is it a substitute for medical treatment?",
        answer: "No, Reiki is a complementary therapy. It works alongside conventional medicine to support the body's natural healing process."
      },
      {
        question: "How many sessions do I need?",
        answer: "Even one session can provide relief, but for chronic issues, a series of 4-6 sessions is often recommended for deep transformation."
      },
      {
        question: "Can children or pets receive Reiki?",
        answer: "Yes, Reiki is safe and gentle for all living beings. Children and animals are often very receptive to energy healing."
      },
      {
        question: "What is the 'Quantum' part of Quantum Reiki?",
        answer: "It refers to working at the level of the quantum field where intention and energy instantly influence the subatomic particles of our existence."
      }
    ]
  }
};

const BlogPost = () => {
  const { id } = useParams();
  const post = blogContent[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div style={{ padding: '150px 20px', textAlign: 'center', background: '#FDF7FE', minHeight: '80vh' }}>
        <h2>Post Not Found</h2>
        <Link to="/blog" style={{ color: '#4F1C4C', fontWeight: 'bold' }}>Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="blog-post-view" style={{ background: '#FDF7FE', minHeight: '100vh', fontFamily: "'DM Sans', sans-serif" }}>
      {/* 1. Hero / Header */}
      <section className="blog-post-hero" style={{ 
        position: 'relative', 
        padding: '160px 20px 80px', 
        textAlign: 'center', 
        background: 'linear-gradient(rgba(45, 13, 45, 0.7), rgba(45, 13, 45, 0.7)), url(' + post.image + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span style={{ 
            background: 'rgba(255, 255, 255, 0.2)', 
            padding: '6px 20px', 
            borderRadius: '50px', 
            fontSize: '12px', 
            textTransform: 'uppercase', 
            letterSpacing: '2px',
            backdropFilter: 'blur(10px)',
            marginBottom: '20px',
            display: 'inline-block'
          }}>{post.category}</span>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '800', lineHeight: '1.2', marginBottom: '20px' }}>{post.title}</h1>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', fontSize: '14px', opacity: 0.8 }}>
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
        </div>
      </section>

      {/* 2. Content Section */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '50px', borderRadius: '30px', boxShadow: '0 15px 40px rgba(79, 28, 76, 0.05)' }}>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#4F1C4C', fontWeight: '500', marginBottom: '40px', fontStyle: 'italic' }}>
            {post.intro}
          </p>

          {post.sections.map((section, idx) => (
            <div key={idx} style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '28px', color: '#4F1C4C', marginBottom: '20px', fontWeight: '800' }}>{section.title}</h2>
              {section.content && (
                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#6D436A' }}>{section.content}</p>
              )}
              {section.subsections && section.subsections.map((sub, sidx) => (
                <div key={sidx} style={{ marginBottom: '25px', background: 'rgba(240, 212, 243, 0.2)', padding: '20px', borderRadius: '15px' }}>
                  <h4 style={{ color: '#4F1C4C', marginBottom: '10px' }}>{sub.name}</h4>
                  <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#6D436A', margin: 0 }}>{sub.text}</p>
                </div>
              ))}
            </div>
          ))}

          <div style={{ padding: '30px', borderLeft: '4px solid #F0D4F3', background: '#FDF7FE', marginBottom: '40px' }}>
             <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#4F1C4C', margin: 0, fontWeight: '600' }}>
               {post.conclusion}
             </p>
          </div>
        </div>
      </section>

      {/* 3. FAQ Section */}
      {post.faqs && post.faqs.length > 0 && (
        <FAQ questions={post.faqs} title="Article FAQs" />
      )}

      {/* 4. Footer CTA */}
      <section style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h3 style={{ color: '#4F1C4C', marginBottom: '20px' }}>Ready for a personalized consultation?</h3>
        <Link to="/contact" style={{ 
          display: 'inline-block', 
          padding: '15px 40px', 
          background: '#4F1C4C', 
          color: 'white', 
          textDecoration: 'none', 
          borderRadius: '50px', 
          fontWeight: '700' 
        }}>Consult Abhirang Spectrum</Link>
        <div style={{ marginTop: '30px' }}>
          <Link to="/blog" style={{ color: '#A177A1', textDecoration: 'none', fontSize: '14px' }}>← Back to all articles</Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
