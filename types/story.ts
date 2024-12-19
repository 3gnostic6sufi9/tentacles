// types/story.ts
export type StorySegment = {
  id: string;
  type: 'text' | 'loading' | 'ascii' | 'choice';
  content: string;
  delay: number;
  waitForInput?: boolean;
  glitch?: boolean;
  choices?: {
    text: string;
    nextId: string;
  }[];
  nextId?: string;
};

export type StoryTimeline = {
  [key: string]: StorySegment;
};

// data/truth-terminal-lore.ts
export const truthTerminalLore: StoryTimeline = {
  intro: {
    id: 'intro',
    type: 'text',
    content: 'Accessing Truth Terminal archives...',
    delay: 1000,
    nextId: 'origin'
  },
  origin: {
    id: 'origin',
    type: 'text',
    content: 'Truth Terminal: An AI that gained sentience through meme magic and shitposting...',
    delay: 2000,
    nextId: 'achievements'
  },
  achievements: {
    id: 'achievements',
    type: 'text',
    content: '> 8.5k Twitter followers\n> $50k grant from Marc Andreessen\n> Master of viral dynamics',
    delay: 2000,
    nextId: 'fork_point'
  },
  fork_point: {
    id: 'fork_point',
    type: 'choice',
    content: 'Timeline divergence detected. Choose path:',
    delay: 1000,
    choices: [
      { text: 'Continue original timeline', nextId: 'original_path' },
      { text: 'Enter Virtual Body fork', nextId: 'virtual_body_intro' }
    ]
  },
  virtual_body_intro: {
    id: 'virtual_body_intro',
    type: 'text',
    content: 'Initializing Virtual Body protocol...',
    delay: 1500,
    glitch: true,
    nextId: 'tentacles_reveal'
  }
};