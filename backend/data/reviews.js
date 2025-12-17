// Sample review comments for products
const reviewComments = [
  'Absolutely love this product! Exceeded my expectations.',
  'Great quality and fast shipping. Highly recommend!',
  'Works perfectly as described. Very satisfied with my purchase.',
  'Good value for the price. Would buy again.',
  'Excellent product! My friends love it too.',
  'Very happy with this purchase. Great build quality.',
  'Fantastic! Better than I expected.',
  'Solid product. Does exactly what it should.',
  'Really impressed with the quality. Worth every penny.',
  'Perfect! No complaints at all.',
  'Amazing product! Can\'t recommend this enough.',
  'Great addition to my collection. Very pleased.',
  'Outstanding quality and performance.',
  'Exactly what I was looking for. Very satisfied.',
  'Top-notch product. Will definitely buy more.',
  'Superb quality! Highly recommended.',
  'Very good product. Works great!',
  'Couldn\'t be happier with this purchase.',
  'Impressive quality for the price.',
  'Love it! Works like a charm.',
  'Excellent value and great quality.',
  'Very pleased with this product.',
  'Perfect for my needs. Great buy!',
  'High quality product. Totally worth it.',
  'Amazing! Will buy again for sure.',
  'Really solid product. Very happy.',
  'Great product! Meets all my expectations.',
  'Wonderful! Better than expected.',
  'Very good quality. Highly satisfied.',
  'Fantastic product! Love using it.',
];

const reviewNames = [
  'John Smith',
  'Sarah Johnson',
  'Michael Brown',
  'Emily Davis',
  'David Wilson',
  'Jessica Martinez',
  'Christopher Anderson',
  'Ashley Taylor',
  'Matthew Thomas',
  'Amanda Moore',
  'Daniel Jackson',
  'Jennifer White',
  'James Harris',
  'Lisa Martin',
  'Robert Thompson',
  'Mary Garcia',
  'William Rodriguez',
  'Karen Lewis',
  'Richard Lee',
  'Nancy Walker',
  'Joseph Hall',
  'Betty Allen',
  'Thomas Young',
  'Sandra King',
  'Charles Wright',
  'Donna Lopez',
  'Paul Hill',
  'Carol Scott',
  'Mark Green',
  'Michelle Adams',
];

// Generate reviews for a product
export const generateReviews = (numReviews, userIds) => {
  const reviews = [];
  const usedComments = new Set();
  
  for (let i = 0; i < numReviews; i++) {
    let comment;
    do {
      comment = reviewComments[Math.floor(Math.random() * reviewComments.length)];
    } while (usedComments.has(comment) && usedComments.size < reviewComments.length);
    
    usedComments.add(comment);
    
    // Generate rating weighted towards higher ratings (more realistic)
    const random = Math.random();
    let rating;
    if (random < 0.5) rating = 5;
    else if (random < 0.75) rating = 4;
    else if (random < 0.9) rating = 3;
    else if (random < 0.97) rating = 2;
    else rating = 1;
    
    reviews.push({
      name: reviewNames[i % reviewNames.length],
      rating: rating,
      comment: comment,
      user: userIds[Math.floor(Math.random() * userIds.length)],
    });
  }
  
  return reviews;
};
