import React from 'react';

interface SchemaMarkupProps {
  type: 'article' | 'faq' | 'howto';
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ type }) => {
  // Article schema for blog posts
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'The Ultimate Guide to Using a Yes No Decision Wheel',
    'description': 'Learn how to use a yes no decision wheel effectively to overcome decision paralysis and make better choices in your daily life.',
    'image': 'https://spinzthewheelz.com/blog-images/yes-no-wheel-guide.jpg',
    'author': {
      '@type': 'Organization',
      'name': 'SpinzTheWheelz',
      'url': 'https://spinzthewheelz.com'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'SpinzTheWheelz',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://spinzthewheelz.com/logo.png'
      }
    },
    'datePublished': '2023-05-21T12:00:00+00:00',
    'dateModified': '2023-05-21T12:00:00+00:00',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://spinzthewheelz.com/blog/yes-no-wheel-guide'
    },
    'keywords': 'yes no wheel, decision making, decision wheel, yes no spinner, random decision tool, overcome indecision'
  };

  // FAQ schema for frequently asked questions
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is a Yes No Decision Wheel?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'A Yes No Decision Wheel is a tool that helps you make decisions by randomly selecting between "yes" and "no" options. Unlike flipping a coin, the wheel provides a more visual and engaging experience with customizable options and features.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How do I use SpinzTheWheelz effectively?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'To use SpinzTheWheelz effectively: 1) Frame your question clearly as a yes/no question, 2) Set your intention to follow the result, 3) Pay attention to your emotional reaction to the result, and 4) Use it for appropriate decisions, especially when you\'re experiencing decision paralysis.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I customize the yes no wheel?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes! SpinzTheWheelz offers multiple customization options including adding a "maybe" option, changing the wheel colors, using dark mode, enabling sound effects, and using mobile touch gestures for spinning.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is SpinzTheWheelz free to use?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, SpinzTheWheelz is completely free to use with unlimited spins. There are no hidden fees, subscriptions, or limitations.'
        }
      }
    ]
  };

  // HowTo schema for instructional content
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': 'How to Make Decisions Using a Yes No Wheel',
    'description': 'Step-by-step guide to using a yes no decision wheel to make better choices and overcome decision paralysis.',
    'image': 'https://spinzthewheelz.com/images/how-to-use-wheel.jpg',
    'step': [
      {
        '@type': 'HowToStep',
        'name': 'Frame your question',
        'text': 'Make sure your question can be answered with a yes or no. For example, "Should I go to the movie tonight?"',
        'image': 'https://spinzthewheelz.com/images/frame-question.jpg',
        'url': 'https://spinzthewheelz.com/#step1'
      },
      {
        '@type': 'HowToStep',
        'name': 'Configure your wheel',
        'text': 'Select whether you want a simple Yes/No wheel or add a Maybe option. You can also customize the colors and enable sound effects.',
        'image': 'https://spinzthewheelz.com/images/configure-wheel.jpg',
        'url': 'https://spinzthewheelz.com/#step2'
      },
      {
        '@type': 'HowToStep',
        'name': 'Spin the wheel',
        'text': 'Click the SPIN button or use touch gestures on mobile to set the wheel in motion.',
        'image': 'https://spinzthewheelz.com/images/spin-wheel.jpg',
        'url': 'https://spinzthewheelz.com/#step3'
      },
      {
        '@type': 'HowToStep',
        'name': 'Accept the result',
        'text': 'Follow the wheel\'s decision to overcome decision paralysis, or use your emotional reaction to the result to understand your true preference.',
        'image': 'https://spinzthewheelz.com/images/accept-result.jpg',
        'url': 'https://spinzthewheelz.com/#step4'
      }
    ],
    'tool': [
      {
        '@type': 'HowToTool',
        'name': 'SpinzTheWheelz web application'
      },
      {
        '@type': 'HowToTool',
        'name': 'Internet-connected device (computer, tablet, or smartphone)'
      }
    ],
    'totalTime': 'PT1M'
  };

  // Select the appropriate schema based on the type prop
  const schema = (() => {
    switch (type) {
      case 'article':
        return articleSchema;
      case 'faq':
        return faqSchema;
      case 'howto':
        return howToSchema;
      default:
        return articleSchema;
    }
  })();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaMarkup;
