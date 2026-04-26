"use client";
import React, { useState } from 'react';
import { Send, User, MessageCircle, Heart, Share2 } from "lucide-react";

export default function CommunityPage() {
  const [comment, setComment] = useState("");
  const [posts, setPosts] = useState([
    { id: 1, user: "Kal_Admin", text: "The new Begena V1.2 nodes are now live. Low latency achieved!", time: "1h ago", likes: 88 },
    { id: 2, user: "Melody_Maker", text: "Is the Krar node available for rent-to-own yet?", time: "3h ago", likes: 15 }
  ]);

  const handlePost = () => {
    if (!comment.trim()) return;
    setPosts([{ id: Date.now(), user: "User_Node", text: comment, time: "Just now", likes: 0 }, ...posts]);
    setComment("");
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 20px' }}>
      <h1 style={{ fontSize: '42px', fontWeight: '900', color: 'white', fontStyle: 'italic', marginBottom: '10px' }}>
        COMMUNITY <span style={{ color: '#ec4899' }}>HUB</span>
      </h1>
      <p style={{ color: '#444', fontWeight: 'bold', fontSize: '12px', marginBottom: '40px' }}>ECOSYSTEM FEED // USER LOGS</p>

      {/* Post Box */}
      <div style={{ backgroundColor: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '25px', padding: '25px', marginBottom: '40px' }}>
        <textarea 
          placeholder="What's your hardware status?"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={{ width: '100%', background: 'none', border: 'none', color: 'white', fontSize: '16px', outline: 'none', resize: 'none', height: '60px' }}
        />
        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '15px' }}>
          <button onClick={handlePost} style={{ background: 'linear-gradient(to right, #ec4899, #a855f7)', color: 'white', fontWeight: '900', padding: '10px 20px', borderRadius: '12px', border: 'none', cursor: 'pointer', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            PUSH TO FEED <Send size={14} />
          </button>
        </div>
      </div>

      {/* Post List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {posts.map((post) => (
          <div key={post.id} style={{ backgroundColor: '#080808', border: '1px solid rgba(255,255,255,0.03)', borderRadius: '20px', padding: '25px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
              <div style={{ background: '#111', padding: '8px', borderRadius: '10px', color: '#a855f7' }}><User size={16} /></div>
              <h4 style={{ color: 'white', margin: 0, fontSize: '13px' }}>@{post.user} <span style={{ color: '#333', fontSize: '10px', marginLeft: '10px' }}>{post.time}</span></h4>
            </div>
            <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.6' }}>{post.text}</p>
            <div style={{ display: 'flex', gap: '20px', marginTop: '20px', color: '#444', fontSize: '11px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Heart size={14} className="hover:text-pink-500" /> {post.likes}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><MessageCircle size={14} /> REPLY</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}