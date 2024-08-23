// Sample array of advertisement posts
const advertisementPosts = [
    { id: 1, content: "Official Ad 1", type: "official" },
    { id: 2, content: "Unofficial Ad 1", type: "unofficial" },
    { id: 3, content: "Official Ad 2", type: "official" },
    { id: 4, content: "Unofficial Ad 2", type: "unofficial" }
];

// Function to filter posts based on their type
function filterAdsByType(posts, type) {
    return posts.filter(post => post.type === type);
}

// Get all official ads
const officialAds = filterAdsByType(advertisementPosts, "official");
console.log("Official Ads:", officialAds);

// Get all unofficial ads
const unofficialAds = filterAdsByType(advertisementPosts, "unofficial");
console.log("Unofficial Ads:", unofficialAds);
