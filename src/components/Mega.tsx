import React from "react";
import BlogCard from "../components/BlogCard";

export default function Mega() {
  const post = [
    {
      id: "1",
      title: "Natural Wonders",
      description:
        "Exploring the Magic of Our Planet, Nature is a treasure trove of awe-inspiring phenomena, showcasing the incredible beauty and complexity of our planet. From majestic landscapes to extraordinary ecosystems, the natural world constantly reminds us of its wonder. Let’s dive into some of the most captivating natural wonders and the fascinating facts that make them so extraordinary.",

      date: "2024-12-25",
      imageUrl: "/images/p1.png",
    },
    {
      id: "2",
      title: "Wildlife",
      description:
        "Wildlife, in its most raw and unfiltered form, holds countless mysteries and astonishing facts that leave us in awe of the natural world. From the vast savannas of Africa to the dense rainforests of the Amazon, wildlife encompasses a dazzling array of species, each uniquely adapted to its environment. Exploring the wonders of wildlife not only enriches our understanding of nature but also reminds us of the importance of preserving these delicate ecosystems for future generations.",

      date: "2024-12-26",
      imageUrl: "/images/p2.png",
    },
    {
      id: "3",
      title: "Environmental Issues",
      description:
        "Environmental issues are critical challenges that affect the health of our planet and all living beings. Addressing these issues requires a comprehensive understanding of their causes, impacts, and potential solutions.",

      date: "2024-12-27",
      imageUrl: "/images/p3.png",
    },
    {
      id: "4",
      title: "The language of flowers",
      description:
       "Flowers have long been more than just beautiful adornments; they have served as silent messengers, conveying emotions and messages through their colors and forms. This intricate system, known as floriography, or the language of flowers, has a rich history that spans cultures and centuries.",

      date: "2024-12-28",
      imageUrl: "/images/p4.png",
    },
    {
      id: "5",
      title: "Desserts",
      description:
        "Deserts, often perceived as barren wastelands, are among the most fascinating and diverse ecosystems on Earth. Covering approximately one-third of the planet's land surface, deserts are characterized by their arid conditions, receiving less than 10 inches (25 centimeters) of rain per year.",

      date: "2024-12-29",
      imageUrl: "/images/p5.png",
    },
    {
      id: "6",
      title: "The Night Sky",
      description:
      "The night sky has captivated humanity for millennia, inspiring myths, guiding explorers, and fueling scientific inquiry. Beyond its aesthetic beauty, the night sky offers a wealth of fascinating facts that deepen our understanding of the universe.",

      date: "2024-12-29",
      imageUrl: "/images/p6.png",
    },
    {
      id: "7",
      title: "Nature’s Hidden Architects",
      description:
        "Nature is home to a multitude of creatures whose architectural feats rival human ingenuity. From intricate insect nests to complex animal burrows, these natural engineers have perfected the art of construction over millennia.",

      date: "2024-12-30",
      imageUrl: "/images/p7.png",
    },
    {
      id: "8",
      title: "Migratory Marvels",
      description:
        "Migration is a remarkable phenomenon observed across the animal kingdom, where species traverse vast distances to find food, breed, or escape harsh climates. These journeys are not only awe-inspiring but also vital for the survival and health of ecosystems worldwide.",

      date: "2024-12-31",
      imageUrl: "/images/p8.png",
    },
    {
      id: "9",
      title: "The Resilience of Nature: How Ecosystems Recover After Disasters",
      description:
        "Nature possesses an extraordinary ability to heal and regenerate following disturbances such as wildfires, hurricanes, earthquakes, and human-induced events. This remarkable recovery process, known as ecological succession, involves the gradual reestablishment of ecosystems, restoring balance and biodiversity over time.",

      date: "2025-1-1",
      imageUrl: "/images/p9.png",
    },
  ];
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
        Journey Through the Beauty of Nature
      </h1>
      <div className="grid grid-cols-1 sm:-grid-cols-2 lg:grid-cols-3 gap-8">
        {post.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
