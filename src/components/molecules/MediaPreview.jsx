function MediaPreview({ images }) {
    if (!images || images.length === 0) return null

    return (
        <div className="flex flex-wrap gap-2">
            {images.map((img, index) => (
                <div key={index} className="relative">
                    <img
                        src={URL.createObjectURL(img)}
                        alt={`preview-${index}`}
                        className="w-24 h-24 object-cover rounded-lg"
                    />
                </div>
            ))}
        </div>
    )
}

export default MediaPreview