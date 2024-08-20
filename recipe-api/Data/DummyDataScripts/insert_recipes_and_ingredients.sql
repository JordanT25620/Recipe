-- Recipes
-- (Using UUIDs for Recipe IDs, matching User IDs, and appropriate timestamps)

-- Recipe for User '8d608d70-8ee1-454a-9362-5f0908f3bd5a'
INSERT INTO "data"."recipes" ("id", "name", "createdByUserId", "createdAt", "updatedAt", "difficulty", "timeRequired", "timeRequiredUnits", "directions")
VALUES
    ('e223d737-4c8e-4a42-9d70-0f914dfd9fa1', 'Classic Spaghetti Bolognese', '8d608d70-8ee1-454a-9362-5f0908f3bd5a', '2024-08-01T12:30:00Z', '2024-08-01T12:30:00Z', 'simple', 30, 'min', 'Heat olive oil in a pan over medium heat. Sauté onion and garlic until softened. Add ground beef, cook until browned. Stir in diced tomatoes, tomato paste, beef broth, basil, oregano, salt, and pepper. Simmer for 30 minutes. Cook spaghetti according to package instructions. Drain. Serve sauce over spaghetti. Top with Parmesan if desired. Heat olive oil in a pan over medium heat. Sauté onion and garlic until softened. Add ground beef, cook until browned. Stir in diced tomatoes, tomato paste, beef broth, basil, oregano, salt, and pepper. Simmer for 30 minutes. Cook spaghetti according to package instructions. Drain. Serve sauce over spaghetti. Top with Parmesan if desired.'),
    ('5d7e946e-d208-42b2-9d56-f9b4c8ef8a9d', 'Italian Meatballs', '8d608d70-8ee1-454a-9362-5f0908f3bd5a', '2024-08-02T13:30:00Z', '2024-08-02T13:30:00Z', NULL, NULL, NULL, NULL);

-- Recipe for User '02b53803-f29c-45d0-8263-2216992bb1de'
INSERT INTO "data"."recipes" ("id", "name", "createdByUserId", "createdAt", "updatedAt", "difficulty", "timeRequired", "timeRequiredUnits", "directions")
VALUES
    ('a0be1c63-f1e6-4a42-b64a-1f5c5c3bda56', 'Chicken Caesar Salad', '02b53803-f29c-45d0-8263-2216992bb1de', '2024-08-03T14:30:00Z', '2024-08-03T14:30:00Z', 'moderate', 20, 'sec', NULL),
    ('b07e3d62-c8bb-4f9d-a2d5-2d7b9eaf5a43', 'Garlic Bread', '02b53803-f29c-45d0-8263-2216992bb1de', '2024-08-04T15:30:00Z', '2024-08-04T15:30:00Z', NULL, NULL, NULL, 'Preheat your oven to 375°F (190°C). Slice a loaf of Italian or French bread in half lengthwise. In a bowl, combine 1/2 cup softened unsalted butter, 4 minced garlic cloves, 2 tablespoons chopped fresh parsley, 1/4 teaspoon salt, and 1/4 teaspoon black pepper. Mix thoroughly until well blended. Spread this garlic butter mixture evenly over the cut sides of the bread. For added flavor, you may optionally sprinkle 1/4 cup grated Parmesan cheese on top. Place the bread halves on a baking sheet and bake for 10 to 12 minutes, or until the edges are golden and crispy. If you prefer a crunchier texture, broil the bread for an additional 1 to 2 minutes, but be sure to monitor closely to prevent burning. Allow the garlic bread to cool slightly before slicing. Serve warm for the best taste, and enjoy this classic accompaniment to any meal or as a delicious standalone snack.');

-- Recipe for User 'bd784396-b978-4692-ae30-1cc5f4fb8db0'
INSERT INTO "data"."recipes" ("id", "name", "createdByUserId", "createdAt", "updatedAt", "difficulty", "timeRequired", "timeRequiredUnits", "directions")
VALUES
    ('e8a0d5f2-7d56-4f7b-8494-b4e3d0a2de57', 'Beef Stroganoff', 'bd784396-b978-4692-ae30-1cc5f4fb8db0', '2024-08-05T16:30:00Z', '2024-08-05T16:30:00Z', 'challenging', 45, 'min', NULL),
    ('8c2d1c3f-ff15-4f8b-83e0-d7a7c5c5d024', 'Apple Pie', 'bd784396-b978-4692-ae30-1cc5f4fb8db0', '2024-08-06T17:30:00Z', '2024-08-06T17:30:00Z', 'moderate', 60, 'min', NULL);

-- Recipe for User 'cb7a33a7-a645-48b9-9240-f6eed865deb4'
INSERT INTO "data"."recipes" ("id", "name", "createdByUserId", "createdAt", "updatedAt", "difficulty", "timeRequired", "timeRequiredUnits", "directions")
VALUES
    ('db1c9c24-13e3-4b53-953c-f43a429f96f4', 'Chicken Alfredo', 'cb7a33a7-a645-48b9-9240-f6eed865deb4', '2024-08-07T18:30:00Z', '2024-08-07T18:30:00Z', 'simple', 20, 'hr', NULL);

-- Ingredients for Recipe 'e223d737-4c8e-4a42-9d70-0f914dfd9fa1'
INSERT INTO "data"."ingredients" ("id", "recipeId", "name", "orderIndex", "createdAt", "updatedAt", "amount", "amountUnits", "description")
VALUES
    ('1b6a1e78-c9e4-4a56-85da-d8dbb35d6d1d', 'e223d737-4c8e-4a42-9d70-0f914dfd9fa1', 'Ground Beef', 1, '2024-08-01T12:30:00Z', '2024-08-01T12:30:00Z', 500, 'grams', 'Lean ground beef'),
    ('2a5b3e63-7a8b-45e7-9e92-1e7e9a0e37c2', 'e223d737-4c8e-4a42-9d70-0f914dfd9fa1', 'Spaghetti', 2, '2024-08-01T12:30:00Z', '2024-08-01T12:30:00Z', 300, 'grams', NULL),
    ('3f1e4b56-d348-43f3-8f72-6b5ec7e0d8a7', 'e223d737-4c8e-4a42-9d70-0f914dfd9fa1', 'Tomato Sauce', 3, '2024-08-01T12:30:00Z', '2024-08-01T12:30:00Z', 400, 'ounces', 'Homemade tomato sauce'),
    ('4e9b1d6a-7c6b-485c-a7c1-8dbafc5938b1', 'e223d737-4c8e-4a42-9d70-0f914dfd9fa1', 'Garlic', 4, '2024-08-01T12:30:00Z', '2024-08-01T12:30:00Z', NULL, NULL, 'Minced garlic'),
    ('5f2a1d69-b3ef-4c1c-989d-b6c9d59e1b8c', 'e223d737-4c8e-4a42-9d70-0f914dfd9fa1', 'Onion', 5, '2024-08-01T12:30:00Z', '2024-08-01T12:30:00Z', NULL, NULL, 'Chopped onion');

-- Ingredients for Recipe 'a0be1c63-f1e6-4a42-b64a-1f5c5c3bda56'
INSERT INTO "data"."ingredients" ("id", "recipeId", "name", "orderIndex", "createdAt", "updatedAt", "amount", "amountUnits", "description")
VALUES
    ('6a9e4a1f-5d95-4e4a-bd15-8c66d1b0b897', 'a0be1c63-f1e6-4a42-b64a-1f5c5c3bda56', 'Chicken Breast', 1, '2024-08-03T14:30:00Z', '2024-08-03T14:30:00Z', 200, 'lbs', 'Cooked chicken breast'),
    ('7b8f3e8a-f6d2-4c8b-9d5f-87cf9e5d0782', 'a0be1c63-f1e6-4a42-b64a-1f5c5c3bda56', 'Romaine Lettuce', 2, '2024-08-03T14:30:00Z', '2024-08-03T14:30:00Z', 100, 'grams', NULL),
    ('8e9b5c76-b1d9-4b66-9e43-c84b4a8a0b56', 'a0be1c63-f1e6-4a42-b64a-1f5c5c3bda56', 'Parmesan Cheese', 3, '2024-08-03T14:30:00Z', '2024-08-03T14:30:00Z', 50, 'grams', 'Shredded parmesan cheese'),
    ('9f0c6e2b-c3b9-4a4e-82fc-f79d84f5e9c7', 'a0be1c63-f1e6-4a42-b64a-1f5c5c3bda56', 'Caesar Dressing', 4, '2024-08-03T14:30:00Z', '2024-08-03T14:30:00Z', NULL, NULL, 'Caesar salad dressing');

-- Ingredients for Recipe 'e8a0d5f2-7d56-4f7b-8494-b4e3d0a2de57'
INSERT INTO "data"."ingredients" ("id", "recipeId", "name", "orderIndex", "createdAt", "updatedAt", "amount", "amountUnits", "description")
VALUES
    ('a7c1e0d6-29d2-4c8e-8d56-6b4f0b9c9f33', 'e8a0d5f2-7d56-4f7b-8494-b4e3d0a2de57', 'Beef Strips', 1, '2024-08-05T16:30:00Z', '2024-08-05T16:30:00Z', 500, 'grams', 'Tender beef strips'),
    ('b8d1a1c3-5e9a-4c6c-8a8e-9b7e1c3d2d57', 'e8a0d5f2-7d56-4f7b-8494-b4e3d0a2de57', 'Mushrooms', 2, '2024-08-05T16:30:00Z', '2024-08-05T16:30:00Z', 200, 'grams', NULL),
    ('c9e2b4d6-9e8d-4b3e-95b0-3d6c4b5f3a1f', 'e8a0d5f2-7d56-4f7b-8494-b4e3d0a2de57', 'Onion', 3, '2024-08-05T16:30:00Z', '2024-08-05T16:30:00Z', 100, 'grams', 'Sliced onion'),
    ('d0f3b5e8-d2c9-4a9b-a8c6-f9b3e4c8b5b8', 'e8a0d5f2-7d56-4f7b-8494-b4e3d0a2de57', 'Sour Cream', 4, '2024-08-05T16:30:00Z', '2024-08-05T16:30:00Z', 200, 'grams', 'Rich sour cream');

-- Ingredients for Recipe 'db1c9c24-13e3-4b53-953c-f43a429f96f4'
INSERT INTO "data"."ingredients" ("id", "recipeId", "name", "orderIndex", "createdAt", "updatedAt", "amount", "amountUnits", "description")
VALUES
    ('e1d7a3b9-d7b9-4c58-beb0-8b3d1e3f7e2c', 'db1c9c24-13e3-4b53-953c-f43a429f96f4', 'Chicken Breast', 1, '2024-08-07T18:30:00Z', '2024-08-07T18:30:00Z', 200, 'grams', 'Cooked chicken breast'),
    ('f2e9b0d6-8b3a-4f7c-989d-1b6f9c7d8d2f', 'db1c9c24-13e3-4b53-953c-f43a429f96f4', 'Alfredo Sauce', 2, '2024-08-07T18:30:00Z', '2024-08-07T18:30:00Z', 150, 'grams', NULL),
    ('a3b4e1d2-f7d3-4e6b-87c5-3d8e9a7c0a8b', 'db1c9c24-13e3-4b53-953c-f43a429f96f4', 'Parmesan Cheese', 3, '2024-08-07T18:30:00Z', '2024-08-07T18:30:00Z', 50, 'grams', 'Shredded parmesan cheese'),
    ('b4c5d1e8-9b3e-4f2d-8c9e-d7c6f4a5b6d7', 'db1c9c24-13e3-4b53-953c-f43a429f96f4', 'Parsley', 4, '2024-08-07T18:30:00Z', '2024-08-07T18:30:00Z', NULL, NULL, 'Chopped parsley');

