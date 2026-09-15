// Use a single placeholder image for all avatars until you have real images
const placeholderAvatar = '../dummyimage.png';

export const avatars = [
    { id: 'avatar1', name: 'Defender', image: placeholderAvatar }
];

// Helper function to get avatar URL
export const getAvatarUrl = (avatarId) => {
    const avatar = avatars.find(a => a.id === avatarId);
    return avatar ? avatar.image : placeholderAvatar;
};