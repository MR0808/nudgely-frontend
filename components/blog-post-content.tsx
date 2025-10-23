'use client';

interface BlogPostContentProps {
    body: any;
}

export function BlogPostContent({ body }: BlogPostContentProps) {
    return <div>{body}</div>;
}
