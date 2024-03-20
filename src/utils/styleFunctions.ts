export function getBackgroundColor(category: string) {
    switch (category.toLowerCase()) {
        case 's': return 'bg-tier-s';
        case 'a': return 'bg-tier-a';
        case 'b': return 'bg-tier-b';
        case 'c': return 'bg-tier-c';
        case 'd': return 'bg-tier-d';
        default: return ''; // Default case
    }
}  