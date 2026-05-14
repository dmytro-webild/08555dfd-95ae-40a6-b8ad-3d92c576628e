"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="largeSmallSizeLargeTitles"
        background="none"
        cardStyle="outline"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Sanaya"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Authentic Lebanese Flavors in the Heart of Annaya"
      description="Experience fresh, traditional cuisine 1000m above sea level with breathtaking views and heartfelt hospitality."
      buttons={[
        {
          text: "Reserve Your Table",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/empty-wood-chair_1339-7232.jpg"
      imageAlt="Scenic view of Sanaya restaurant in Annaya"
      showDimOverlay={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/stones-natural-room-interior-design_23-2151890375.jpg",
          alt: "Stones natural room interior design",
        },
        {
          src: "http://img.b2bpic.net/free-photo/rustic-patio-with-deck-furniture-vegetation_23-2150698362.jpg",
          alt: "Rustic patio with deck furniture and vegetation",
        },
        {
          src: "http://img.b2bpic.net/free-photo/table-set-dinning-table_1339-6432.jpg",
          alt: "table set on dinning table",
        },
        {
          src: "http://img.b2bpic.net/free-photo/view-nature-scotland-united-kingdom_1268-19771.jpg",
          alt: "View of the nature of Scotland United Kingdom",
        },
        {
          src: "http://img.b2bpic.net/free-photo/empty-wood-chair_1339-7232.jpg",
          alt: "authentic lebanese restaurant landscape annaya",
        },
      ]}
      avatarText="Join our community of food lovers"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="More Than Just a Meal"
      description="Sanaya offers a unique blend of Lebanese tradition, warm family hospitality, and stunning panoramic views of the mountains and sea. Every bite is prepared with fresh ingredients to transport you to the heart of authentic Annaya."
      imageSrc="http://img.b2bpic.net/free-photo/high-angle-dining-table-assortment_23-2150312224.jpg"
    />
  </div>

  <div id="menu" data-section="menu">
      <FeatureCardSix
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Fresh, Authentic Flavors",
          description: "Our ingredients are sourced fresh daily to ensure every plate carries the taste of authentic Lebanon.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-putting-tomatoes-baked-pizza-dough-with-smoked-salmon-slices_23-2148785698.jpg",
        },
        {
          title: "Traditional Charcoal Grill",
          description: "Expertly seasoned meats cooked to perfection over our traditional charcoal grill.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-meat-kebab-skewer-with-grilled-potatoes-vegetables-with-sauce-fire-board_141793-5007.jpg",
        },
        {
          title: "Breathtaking Scenery",
          description: "Dine while enjoying one of the best mountain and sea views in the entire Annaya region.",
          imageSrc: "http://img.b2bpic.net/free-photo/asian-people-having-dinner-party_23-2149552628.jpg",
        },
      ]}
      title="Why Our Guests Love Us"
      description="Dedicated to quality, freshness, and the genuine spirit of Lebanese generosity."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          brand: "Signature",
          name: "Fresh Baked Pizza",
          price: "12.00",
          rating: 5,
          reviewCount: "120",
          imageSrc: "http://img.b2bpic.net/free-photo/different-kutab-qutab-types-with-sumakh-copper-tray_114579-2357.jpg",
        },
        {
          id: "2",
          brand: "Classic",
          name: "Traditional Mezza",
          price: "15.00",
          rating: 5,
          reviewCount: "98",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-fresh-greens-with-peeled-pomegranates-light-table-fruit-green-meal_140725-124692.jpg",
        },
        {
          id: "3",
          brand: "Grill",
          name: "Tawouk Platter",
          price: "18.00",
          rating: 4,
          reviewCount: "85",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-kebab-platter-with-chicken-vegetables-lamb-tikka-lula-kebabs_141793-2146.jpg",
        },
        {
          id: "4",
          brand: "Salad",
          name: "Fresh Fattoush",
          price: "8.00",
          rating: 5,
          reviewCount: "60",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-healthy-bell-pepper-salad-with-chicken-top-view_114579-9742.jpg",
        },
        {
          id: "5",
          brand: "Classic",
          name: "Baba Ganoush",
          price: "9.00",
          rating: 5,
          reviewCount: "75",
          imageSrc: "http://img.b2bpic.net/free-photo/homemade-crispbread-toast-with-cottage-cheese-green-olives-slices-cabbage-tomatoes-corn-green-pepper-cutting-board-healthy-food-concept-top-view-flat-lay_114579-1335.jpg",
        },
        {
          id: "6",
          brand: "Dessert",
          name: "Warm Knefeh",
          price: "7.00",
          rating: 5,
          reviewCount: "150",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-turkish-sweets-baklava-with-pistachio-served-with-ice-cream-platter_140725-12619.jpg",
        },
      ]}
      title="Our Signature Specialties"
      description="Handpicked favorites loved by our local community and visitors alike."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Donna Achkouti",
          role: "Visitor",
          testimonial: "Sanaya is officially my go-to spot in Annaya. Trying it is a must, especially the pizza and Lebanese mezza.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-woman-with-smartphone-beer_23-2147680764.jpg",
        },
        {
          id: "2",
          name: "Charbel Gh",
          role: "Local Guide",
          testimonial: "One of the best Lebanese restaurants. Food is fresh, meat is excellent, and the service is perfect.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-smiley-woman-taking-food-photos_23-2149333800.jpg",
        },
        {
          id: "3",
          name: "Hanan Tarhini",
          role: "Local Guide",
          testimonial: "Exceptionally delicious food and wonderful atmosphere. The ample parking space is also a huge plus.",
          imageSrc: "http://img.b2bpic.net/free-photo/interracial-group-three-friends-dining-restaurant-spending-good-time-together_273609-8988.jpg",
        },
        {
          id: "4",
          name: "Mariane Sfeir",
          role: "Local Guide",
          testimonial: "Sweet staff, delicious food, and a beautiful view over the mountains and sea!",
          imageSrc: "http://img.b2bpic.net/free-photo/young-adult-having-fun-white-party_23-2149575134.jpg",
        },
        {
          id: "5",
          name: "Manuel Tokmakjian",
          role: "Local Guide",
          testimonial: "Beautiful place with incredible scenery. Servers are friendly and treat you like family.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-happy-woman-her-boyfriend-reading-text-message-mobile-phone-while-sitting-dining-table_637285-10328.jpg",
        },
      ]}
      title="Voices of Sanaya"
      description="What our guests have to say about their visit to Sanaya."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "1",
          value: "1000m",
          description: "Above sea level",
        },
        {
          id: "2",
          value: "20+",
          description: "Years of experience",
        },
        {
          id: "3",
          value: "100%",
          description: "Authentic ingredients",
        },
      ]}
      title="Serving Annaya for Years"
      description="Bringing people together through exceptional Lebanese hospitality."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "Do I need a reservation?",
          content: "We recommend reservations for weekends and large groups to ensure the best experience.",
        },
        {
          id: "2",
          title: "Is parking available?",
          content: "Yes, we offer ample parking space for our guests' convenience.",
        },
        {
          id: "3",
          title: "Are you near St. Charbel?",
          content: "Yes, we are literally one minute away from the St. Charbel Annaya site.",
        },
      ]}
      title="Common Questions"
      description="Everything you need to know before visiting us."
      faqsAnimation="blur-reveal"
      imageSrc="http://img.b2bpic.net/free-photo/empty-wood-chair_1339-7232.jpg"
      imageAlt="Scenic view of Sanaya restaurant in Annaya"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars",
      }}
      tag="Contact"
      title="Plan Your Visit"
      description="Join us at Sanaya for an authentic Lebanese culinary journey."
      imageSrc="http://img.b2bpic.net/free-photo/sitting-table-with-chairs-yellow-sofa-restaurant-with-panoramic-view_114579-1523.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Sanaya"
      copyrightText="© 2025 Sanaya Annaya. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
