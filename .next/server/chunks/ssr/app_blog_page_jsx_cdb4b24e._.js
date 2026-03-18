module.exports=[89003,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(38246);a.s(["default",0,()=>((0,c.useEffect)(()=>{window.scrollTo(0,0)},[]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
        .blog-page {
          font-family: 'DM Sans', sans-serif;
          background: #FDF7FE;
          min-height: 100vh;
        }

        .blog-hero {
          padding: 140px 20px 80px;
          text-align: center;
          color: white;
        }


        .blog-hero h1 {
          font-family: 'DM Sans', serif;
          font-size: 52px;
          color: #F2DA91;
          margin-bottom: 20px;
          position: relative;
          z-index: 2;
          line-height: 1.2;
        }

        .blog-hero p {
          font-size: 20px;
          max-width: 650px;
          margin: 0 auto;
          opacity: 0.85;
          line-height: 1.6;
          position: relative;
          z-index: 2;
        }

        .blog-grid-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 20px;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 35px;
        }

        .blog-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(79, 28, 76, 0.06);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(79, 28, 76, 0.12);
        }

        .blog-card-img {
          height: 220px;
          overflow: hidden;
          position: relative;
        }

        .blog-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .blog-card:hover .blog-card-img img {
          transform: scale(1.05);
        }

        .blog-card-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          padding: 5px 14px;
          border-radius: 50px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: white;
          backdrop-filter: blur(6px);
        }

        .blog-card-body {
          padding: 28px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .blog-card-tags {
          display: flex;
          gap: 10px;
          margin-bottom: 14px;
        }

        .blog-card-tags span {
          font-size: 11px;
          color: #8a4a8a;
          font-weight: 600;
        }

        .blog-card-body h3 {
          font-family: 'DM Sans', serif;
          font-size: 21px;
          color: #2D0D2D;
          margin: 0 0 14px;
          line-height: 1.4;
        }

        .blog-card-body p {
          color: #6D436A;
          font-size: 15px;
          line-height: 1.7;
          margin: 0 0 20px;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .blog-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #F4E8F4;
          padding-top: 18px;
          margin-top: auto;
        }

        .blog-card-footer span {
          font-size: 13px;
          color: #aaa;
        }

        .blog-card-footer .read-btn {
          background: none;
          border: none;
          color: #4F1C4C;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'DM Sans', sans-serif;
          transition: color 0.3s ease;
        }

        .blog-card-footer .read-btn:hover {
          color: #8a4a8a;
        }

        /* Philosophy Section */
        .philosophy-section {
          background: #FAF0D2;
          padding: 100px 20px;
          text-align: center;
        }

        .philosophy-section h2 {
          font-family: 'DM Sans', serif;
          font-size: 40px;
          color: #6B4A1A;
          margin-bottom: 25px;
        }

        .philosophy-section > div > p {
          font-size: 18px;
          line-height: 1.8;
          color: #6D436A;
          max-width: 850px;
          margin: 0 auto 45px;
        }

        .philosophy-pills {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .philosophy-pill {
          background: white;
          padding: 22px 35px;
          border-radius: 16px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.04);
          transition: transform 0.3s ease;
        }

        .philosophy-pill:hover {
          transform: translateY(-4px);
        }

        .philosophy-pill h4 {
          color: #4F1C4C;
          margin: 0 0 6px;
          font-size: 16px;
        }

        .philosophy-pill p {
          font-size: 13px;
          color: #999;
          margin: 0;
        }

        /* Newsletter */
        .newsletter-section {
          background: linear-gradient(135deg, #2D0D2D 0%, #4F1C4C 100%);
          padding: 80px 20px;
          color: white;
          text-align: center;
        }

        .newsletter-section h2 {
          font-family: 'DM Sans', serif;
          font-size: 36px;
          color: #F2DA91;
          margin-bottom: 18px;
        }

        .newsletter-section > p {
          font-size: 17px;
          max-width: 560px;
          margin: 0 auto 35px;
          opacity: 0.8;
          line-height: 1.6;
        }

        .newsletter-form {
          display: flex;
          justify-content: center;
          gap: 12px;
          max-width: 480px;
          margin: 0 auto;
          flex-wrap: wrap;
        }

        .newsletter-form input {
          padding: 14px 24px;
          border-radius: 50px;
          border: 2px solid rgba(242, 218, 145, 0.3);
          background: rgba(255,255,255,0.08);
          color: white;
          flex: 1;
          font-size: 15px;
          font-family: 'DM Sans', sans-serif;
          min-width: 200px;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .newsletter-form input::placeholder {
          color: rgba(255,255,255,0.5);
        }

        .newsletter-form input:focus {
          border-color: #F2DA91;
        }

        .newsletter-form button {
          background: #F2DA91;
          color: #4F1C4C;
          padding: 14px 35px;
          border-radius: 50px;
          border: none;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .newsletter-form button:hover {
          background: #e8cc7a;
          transform: scale(1.03);
        }

        .blog-title-hover:hover {
          color: #925C92 !important;
        }

        @media (max-width: 768px) {
          .blog-hero h1 {
            font-size: 32px;
          }
          .blog-hero p {
            font-size: 16px;
          }
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .philosophy-section h2 {
            font-size: 28px;
          }
          .newsletter-section h2 {
            font-size: 26px;
          }
        }
      `}),(0,b.jsxs)("div",{className:"blog-page",children:[(0,b.jsxs)("section",{className:"blog-hero cosmic-hero",children:[(0,b.jsx)("h1",{children:"Insights Into Your Soul's Journey"}),(0,b.jsx)("p",{children:"Explore the intersection of ancient sciences and conscious living through our latest articles and guides."})]}),(0,b.jsx)("section",{className:"blog-grid-section",children:(0,b.jsx)("div",{className:"blog-grid",children:[{id:"graphology-traits",category:"Graphology",title:"The Silent Language: What Your Handwriting Reveals About Your Character",excerpt:"Handwriting is more than just traces of ink on paper. It is a biological expression of the subconscious mind. Discover how slant, pressure, and letter spacing indicate personality traits, emotional health, and hidden potential.",date:"May 12, 2026",image:"/graphology_blog.png",tags:["Personality","Subconscious","Analysis"]},{id:"graphology-personality-examples",category:"Graphology",title:"What Your Handwriting Says About Your Personality (With Examples)",excerpt:"Discover the hidden meanings behind your handwriting strokes and how they reveal your true personality traits.",date:"May 15, 2026",image:"/graph_personality.png",tags:["Personality","Analysis"]},{id:"graphology-slanted-meaning",category:"Graphology",title:"Slanted Handwriting Meaning in Graphology Explained",excerpt:"Learn what forward, backward, or vertical handwriting slant says about your emotional expressions and boundaries.",date:"May 16, 2026",image:"/graph_slant.png",tags:["Slant","Emotions"]},{id:"graphology-signature-analysis",category:"Graphology",title:"Signature Analysis: What Your Signature Reveals About You",excerpt:"Your signature is your public face. See what your signature style, size, and placement say about your confidence and self-image.",date:"May 17, 2026",image:"/graph_signature.png",tags:["Signature","Self-Image"]},{id:"graphology-improve-change-personality",category:"Graphology",title:"How to Improve Handwriting to Change Personality",excerpt:"Graphotherapy uses conscious handwriting changes to rewire subconscious traits. Find out how altering your strokes can improve your life.",date:"May 18, 2026",image:"/graph_improve.png",tags:["Graphotherapy","Improvement"]},{id:"astrology-planets",category:"Astrology",title:"Planetary Alignments: Navigating Life's Cycles with Vedic Wisdom",excerpt:"Understanding the influence of the Navagrahas on your life can provide a powerful roadmap. Learn how to align your actions with the cosmic rhythm for career growth, relationships, and spiritual evolution.",date:"May 10, 2026",image:"/astrology_blog.png",tags:["Vedic","Planets","Guidance"]},{id:"astrology-read-birth-chart",category:"Astrology",title:"How to Read Your Birth Chart (Step-by-Step for Beginners)",excerpt:"A simple, beginner-friendly guide to understanding houses, planets, and zodiac signs in your natal chart.",date:"May 19, 2026",image:"/astro_chart.png",tags:["Birth Chart","Beginners"]},{id:"astrology-why-bad-luck",category:"Astrology",title:"Why You Are Facing Bad Luck According to Astrology",excerpt:"Explore planetary transits, doshas, and karmic cycles that might be causing sudden hurdles, and how to remedy them.",date:"May 20, 2026",image:"/astro_luck.png",tags:["Karma","Remedies"]},{id:"astrology-most-powerful-zodiac",category:"Astrology",title:"Which Zodiac Sign Is Most Powerful and Why",excerpt:"Unpack the strengths, unique powers, and cosmic influence of each zodiac sign to see which ones dominate in different areas of life.",date:"May 21, 2026",image:"/astro_zodiac.png",tags:["Zodiac","Power"]},{id:"astrology-planets-affect-life",category:"Astrology",title:"How Planets Affect Your Life (Simple Guide)",excerpt:"From the Sun to Saturn, learn how each planet's energy shapes your career, relationships, and health.",date:"May 22, 2026",image:"/astro_planets.png",tags:["Planets","Life Impact"]},{id:"numerology-destiny",category:"Numerology",title:"Decoding Destiny: Finding Your Life Path Through Sacred Numbers",excerpt:"Every number carries a specific vibration. Calculate your life path number and understand the unique challenges, strengths, and divine purpose that shape your journey through this lifetime.",date:"May 08, 2026",image:"/numerology_blog.png",tags:["Numbers","Destiny","Life-Path"]},{id:"numerology-calculate-life-path",category:"Numerology",title:"How to Calculate Your Life Path Number (Step-by-Step)",excerpt:"Your life path number reveals your ultimate destiny. Learn the simple calculation method to find yours today.",date:"May 23, 2026",image:"/numero_path.png",tags:["Life Path","Calculation"]},{id:"numerology-lucky-number",category:"Numerology",title:"Which Number Is Lucky for You Based on Numerology",excerpt:"Find out your personal lucky numbers for career, business, and daily decisions using your birth date.",date:"May 24, 2026",image:"/numero_lucky.png",tags:["Lucky Numbers","Success"]},{id:"numerology-name-correction",category:"Numerology",title:"Numerology Name Correction: Does It Really Work?",excerpt:"Can changing the spelling of your name alter your destiny? Discover the science of numeric vibrations behind name correction.",date:"May 25, 2026",image:"/numero_name.png",tags:["Name Correction","Vibration"]},{id:"numerology-meaning-1-to-9",category:"Numerology",title:"Meaning of Numbers 1 to 9 in Numerology",excerpt:"A comprehensive guide to the core characteristics, strengths, and weaknesses of every root number from 1 to 9.",date:"May 26, 2026",image:"/numero_numbers.png",tags:["Core Numbers","Meaning"]},{id:"vastu-harmony",category:"Vastu Shastra",title:"The Architecture of Peace: Designing a Home That Heals",excerpt:"Your environment is an extension of your energy body. Vastu Shastra provides timeless principles to balance the five elements in your home for health, wealth, and family harmony.",date:"May 05, 2026",image:"/vastu_blog.png",tags:["Architecture","Balance","Prosperity"]},{id:"reiki-distance",category:"Reiki",title:"Quantum Healing: The Science Behind Distance Reiki Therapy",excerpt:"Energy knows no boundaries. Explore how Reiki can be transmitted across any distance to bring deep healing to your physical, emotional, and spiritual layers through sacred symbols and intention.",date:"May 02, 2026",image:"/reiki_blog.png",tags:["Energy","Healing","Quantum"]}].map(a=>(0,b.jsxs)("article",{className:"blog-card",style:{background:"#F0D4F3",borderRadius:"15px",overflow:"hidden",display:"flex",flexDirection:"column",boxShadow:"0 10px 30px rgba(79, 28, 76, 0.1)"},children:[(0,b.jsx)("div",{style:{height:"220px",overflow:"hidden"},children:(0,b.jsx)("img",{src:a.image,alt:a.title,style:{width:"100%",height:"100%",objectFit:"cover"}})}),(0,b.jsxs)("div",{style:{padding:"30px",display:"flex",flexDirection:"column",flexGrow:1},children:[(0,b.jsx)("div",{style:{marginBottom:"16px"},children:(0,b.jsx)("span",{style:{background:"#A177A1",color:"white",padding:"6px 14px",borderRadius:"20px",fontSize:"12px",fontWeight:"600"},children:a.category})}),(0,b.jsx)(d.default,{href:`/blog/${a.id}`,onClick:()=>window.scrollTo({top:0,left:0,behavior:"instant"}),style:{textDecoration:"none"},children:(0,b.jsx)("h4",{style:{margin:"0 0 20px 0",fontSize:"20px",color:"#4F1C4C",fontWeight:"700",lineHeight:"1.4",transition:"color 0.3s ease"},className:"blog-title-hover",children:a.title})}),(0,b.jsxs)("div",{style:{display:"flex",gap:"20px",color:"#8A678A",fontSize:"13px",marginBottom:"30px"},children:[(0,b.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[(0,b.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,b.jsx)("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),(0,b.jsx)("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),(0,b.jsx)("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),(0,b.jsx)("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),a.date]}),(0,b.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[(0,b.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,b.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,b.jsx)("polyline",{points:"12 6 12 12 16 14"})]}),"5 min Read"]})]}),(0,b.jsxs)("div",{style:{marginTop:"auto",display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid rgba(79, 28, 76, 0.1)",paddingTop:"20px"},children:[(0,b.jsx)("span",{style:{fontSize:"13px",color:"#6D436A"},children:"By Abhirang Spectrum"}),(0,b.jsx)(d.default,{href:`/blog/${a.id}`,onClick:()=>window.scrollTo({top:0,left:0,behavior:"instant"}),style:{padding:"6px 14px",border:"1px solid #4F1C4C",borderRadius:"6px",color:"#4F1C4C",fontSize:"13px",textDecoration:"none",transition:"background 0.3s ease"},children:"Read More"})]})]})]},a.id))})}),(0,b.jsx)("section",{className:"philosophy-section",children:(0,b.jsxs)("div",{children:[(0,b.jsx)("h2",{children:"The Abhirang Spectrum Philosophy"}),(0,b.jsxs)("p",{children:["We believe that physical ailments, emotional distress, and life's obstacles are all rooted in energy imbalances. Our approach combines the analytical science of ",(0,b.jsx)("strong",{children:"Graphology"}),", the celestial guidance of ",(0,b.jsx)("strong",{children:"Astrology"}),", the vibrational power of ",(0,b.jsx)("strong",{children:"Numerology"}),", the environmental harmony of ",(0,b.jsx)("strong",{children:"Vastu"}),", and the pure channeling of ",(0,b.jsx)("strong",{children:"Reiki"}),"."]}),(0,b.jsxs)("div",{className:"philosophy-pills",children:[(0,b.jsxs)("div",{className:"philosophy-pill",children:[(0,b.jsx)("h4",{children:"✍️ Analytical"}),(0,b.jsx)("p",{children:"Rooted in Science"})]}),(0,b.jsxs)("div",{className:"philosophy-pill",children:[(0,b.jsx)("h4",{children:"🌌 Celestial"}),(0,b.jsx)("p",{children:"Guided by Stars"})]}),(0,b.jsxs)("div",{className:"philosophy-pill",children:[(0,b.jsx)("h4",{children:"🧘 Integrated"}),(0,b.jsx)("p",{children:"Healing for All"})]}),(0,b.jsxs)("div",{className:"philosophy-pill",children:[(0,b.jsx)("h4",{children:"🏠 Environmental"}),(0,b.jsx)("p",{children:"Balanced Spaces"})]})]})]})}),(0,b.jsxs)("section",{className:"newsletter-section cosmic-hero",children:[(0,b.jsx)("h2",{children:"Join the Wisdom Circle"}),(0,b.jsx)("p",{children:"Receive monthly insights, cosmic forecasts, and healing tips directly in your inbox."}),(0,b.jsxs)("div",{className:"newsletter-form",children:[(0,b.jsx)("input",{type:"email",placeholder:"Enter your email"}),(0,b.jsx)("button",{children:"Subscribe"})]})]})]})]}))])}];

//# sourceMappingURL=app_blog_page_jsx_cdb4b24e._.js.map