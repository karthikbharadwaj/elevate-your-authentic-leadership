
import React from 'react';

export const TransformationResults = () => {
  return (
    <div className="glass-card p-8 rounded-2xl text-center">
      <h3 className="text-2xl font-bold gradient-text mb-6">The Transformation My Coaching Clients Experience</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <div className="text-3xl">⚡</div>
          <h4 className="font-semibold text-[var(--text-color)]">Lightning-Fast Decision Making</h4>
          <p className="text-[var(--text-color-secondary)]">No more analysis paralysis - make confident choices that accelerate results</p>
        </div>
        <div className="space-y-2">
          <div className="text-3xl">🎯</div>
          <h4 className="font-semibold text-[var(--text-color)]">Magnetic Executive Presence</h4>
          <p className="text-[var(--text-color-secondary)]">Command respect and influence in every room you enter</p>
        </div>
        <div className="space-y-2">
          <div className="text-3xl">🚀</div>
          <h4 className="font-semibold text-[var(--text-color)]">Promotion-Ready Positioning</h4>
          <p className="text-[var(--text-color-secondary)]">Strategic career advancement on your timeline, not theirs</p>
        </div>
      </div>
      <div className="mt-8 p-6 bg-gradient-to-r from-[var(--primary-color)]/10 to-[var(--primary-light)]/10 rounded-xl">
        <p className="text-lg text-[var(--text-color)] font-medium">
          <strong>Here's what I promise:</strong> In 90 days of personalized coaching, you'll either have the promotion conversation you've been avoiding, or you'll have the unshakeable confidence to demand the recognition you deserve. <em>That's not just a goal—it's your new reality.</em>
        </p>
      </div>
    </div>
  );
};
