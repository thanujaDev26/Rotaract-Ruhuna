import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

const categories = [
    'All',
    'Community Service',
    'International Service',
    'Professional Development',
    'Club Service',
    'Environmental',
];

const featuredPosts = [
    {
        id: 1,
        title: 'Soul Sync: Bridging Minds Across Borders',
        excerpt: 'An international collaboration focusing on mental health awareness with the Rotaract Club of Dhaka North.',
        image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2949&auto=format&fit=crop',
        category: 'International Service',
        date: '2024-03-15',
        readTime: '5 min read',
    },
    {
        id: 2,
        title: 'Eco Warriors: Protecting Our Coastal Heritage',
        excerpt: 'Join us in our latest environmental initiative to preserve and protect our beautiful coastal ecosystems.',
        image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?q=80&w=2940&auto=format&fit=crop',
        category: 'Environmental',
        date: '2024-03-10',
        readTime: '4 min read',
    },
];

const blogPosts = [
    {
        id: 3,
        title: 'Leadership Workshop Series 2024',
        excerpt: 'Developing tomorrows leaders through comprehensive training and mentorship programs.',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop',
        category: 'Professional Development',
        date: '2024-03-08',
        readTime: '3 min read',
    },
    {
        id: 4,
        title: 'Community Health Initiative',
        excerpt: 'Making healthcare accessible to underserved communities through mobile clinics.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2940&auto=format&fit=crop',
        category: 'Community Service',
        date: '2024-03-05',
        readTime: '6 min read',
    },
    // Add more blog posts as needed
];

const FeaturedPost = ({ post }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative group cursor-pointer"
    >
        <div className="relative h-[400px] overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
            <motion.img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
        <span className="inline-block px-3 py-1 bg-red-600 rounded-full text-sm font-medium mb-3">
          {post.category}
        </span>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-red-400 transition-colors">
                    {post.title}
                </h3>
                <p className="text-gray-200 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm">
                    <span>{format(new Date(post.date), 'MMM dd, yyyy')}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                </div>
            </div>
        </div>
    </motion.div>
);

const BlogCard = ({ post }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        className="bg-white rounded-xl overflow-hidden shadow-lg group"
    >
        <div className="relative h-48 overflow-hidden">
            <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
        </div>
        <div className="p-6">
      <span className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-3">
        {post.category}
      </span>
            <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">
                {post.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{format(new Date(post.date), 'MMM dd, yyyy')}</span>
                <span>{post.readTime}</span>
            </div>
        </div>
    </motion.div>
);

export default function Blogs() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="min-h-screen bg-gray-50 pt-24">
            {/* Hero Section */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            RACRUH Blog
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Discover stories, insights, and updates from our Rotaract journey
                        </p>
                    </motion.div>

                    {/* Search and Filter */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="relative">
                            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <select
                                className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Posts */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-2 gap-8">
                    {featuredPosts.map((post) => (
                        <FeaturedPost key={post.id} post={post} />
                    ))}
                </div>
            </div>

            {/* All Posts */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
                    <button className="flex items-center text-red-600 hover:text-red-700 font-medium">
                        View All <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="bg-gray-900 text-white py-16 mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                        <p className="text-gray-400 mb-8">
                            Stay updated with our latest stories and club activities
                        </p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 rounded-lg text-gray-900"
                            />
                            <button
                                type="submit"
                                className="bg-red-600 px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}