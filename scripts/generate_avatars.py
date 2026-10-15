import os
import math
from PIL import Image, ImageDraw, ImageFilter

OUTPUT_DIR = r"d:\01VietDiscoverybyMsTrang\public\assets\avatars"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# List of 30 avatars to generate (the remaining ones from the 40 list)
REMAINING_AVATARS = [
    # BOYS
    {
        "id": "boy_dinosaur_hero",
        "gender": "boy",
        "title": "Dinosaur Hero",
        "bg_top": (167, 243, 208), "bg_bot": (52, 211, 153),
        "skin": (255, 224, 189), "hair": (92, 51, 23),
        "outfit": (16, 185, 129), "accent": (245, 158, 11),
        "theme": "dino"
    },
    {
        "id": "boy_young_pilot",
        "gender": "boy",
        "title": "Young Pilot",
        "bg_top": (186, 230, 253), "bg_bot": (56, 189, 248),
        "skin": (254, 215, 170), "hair": (67, 40, 24),
        "outfit": (146, 64, 14), "accent": (250, 204, 21),
        "theme": "pilot"
    },
    {
        "id": "boy_treasure_hunter",
        "gender": "boy",
        "title": "Treasure Hunter",
        "bg_top": (254, 243, 199), "bg_bot": (245, 158, 11),
        "skin": (255, 218, 185), "hair": (80, 50, 30),
        "outfit": (180, 83, 9), "accent": (234, 179, 8),
        "theme": "treasure"
    },
    {
        "id": "boy_superhero_boy",
        "gender": "boy",
        "title": "Superhero Boy",
        "bg_top": (254, 205, 211), "bg_bot": (244, 63, 94),
        "skin": (255, 224, 189), "hair": (30, 41, 59),
        "outfit": (225, 29, 72), "accent": (250, 204, 21),
        "theme": "hero"
    },
    {
        "id": "boy_wildlife_ranger",
        "gender": "boy",
        "title": "Wildlife Ranger",
        "bg_top": (209, 250, 229), "bg_bot": (16, 185, 129),
        "skin": (240, 200, 160), "hair": (70, 45, 20),
        "outfit": (74, 120, 50), "accent": (217, 119, 6),
        "theme": "ranger"
    },
    {
        "id": "boy_smart_detective",
        "gender": "boy",
        "title": "Smart Detective",
        "bg_top": (226, 232, 240), "bg_bot": (148, 163, 184),
        "skin": (255, 220, 190), "hair": (45, 30, 20),
        "outfit": (100, 80, 60), "accent": (245, 158, 11),
        "theme": "detective"
    },
    {
        "id": "boy_galaxy_warrior",
        "gender": "boy",
        "title": "Galaxy Warrior",
        "bg_top": (199, 210, 254), "bg_bot": (99, 102, 241),
        "skin": (250, 210, 180), "hair": (30, 27, 75),
        "outfit": (79, 70, 229), "accent": (56, 189, 248),
        "theme": "galaxy"
    },
    {
        "id": "boy_racing_champion",
        "gender": "boy",
        "title": "Racing Champion",
        "bg_top": (254, 215, 170), "bg_bot": (249, 115, 22),
        "skin": (255, 224, 189), "hair": (40, 40, 40),
        "outfit": (239, 68, 68), "accent": (255, 255, 255),
        "theme": "racing"
    },
    {
        "id": "boy_little_inventor",
        "gender": "boy",
        "title": "Little Inventor",
        "bg_top": (254, 240, 138), "bg_bot": (234, 179, 8),
        "skin": (255, 220, 180), "hair": (90, 50, 30),
        "outfit": (13, 148, 136), "accent": (245, 158, 11),
        "theme": "inventor"
    },
    {
        "id": "boy_dragon_adventurer",
        "gender": "boy",
        "title": "Dragon Adventurer",
        "bg_top": (254, 202, 202), "bg_bot": (220, 38, 38),
        "skin": (250, 215, 175), "hair": (50, 25, 20),
        "outfit": (185, 28, 28), "accent": (251, 191, 36),
        "theme": "dragon"
    },
    {
        "id": "boy_english_star",
        "gender": "boy",
        "title": "English Star",
        "bg_top": (224, 231, 255), "bg_bot": (79, 70, 229),
        "skin": (255, 224, 189), "hair": (40, 30, 20),
        "outfit": (37, 99, 235), "accent": (245, 158, 11),
        "theme": "star"
    },

    # GIRLS
    {
        "id": "girl_galaxy_princess",
        "gender": "girl",
        "title": "Galaxy Princess",
        "bg_top": (233, 213, 255), "bg_bot": (168, 85, 247),
        "skin": (255, 228, 200), "hair": (91, 33, 182),
        "outfit": (147, 51, 234), "accent": (250, 204, 21),
        "theme": "princess"
    },
    {
        "id": "girl_magic_star",
        "gender": "girl",
        "title": "Magic Star",
        "bg_top": (253, 230, 138), "bg_bot": (245, 158, 11),
        "skin": (255, 224, 189), "hair": (120, 53, 15),
        "outfit": (217, 119, 6), "accent": (254, 240, 138),
        "theme": "magic_star"
    },
    {
        "id": "girl_little_scientist",
        "gender": "girl",
        "title": "Little Scientist",
        "bg_top": (187, 247, 208), "bg_bot": (34, 197, 94),
        "skin": (255, 220, 185), "hair": (45, 25, 20),
        "outfit": (255, 255, 255), "accent": (16, 185, 129),
        "theme": "scientist"
    },
    {
        "id": "girl_rainbow_adventurer",
        "gender": "girl",
        "title": "Rainbow Adventurer",
        "bg_top": (254, 240, 138), "bg_bot": (244, 114, 182),
        "skin": (255, 225, 190), "hair": (150, 60, 40),
        "outfit": (236, 72, 153), "accent": (56, 189, 248),
        "theme": "rainbow"
    },
    {
        "id": "girl_ocean_princess",
        "gender": "girl",
        "title": "Ocean Princess",
        "bg_top": (204, 251, 241), "bg_bot": (20, 184, 166),
        "skin": (255, 228, 205), "hair": (15, 118, 110),
        "outfit": (13, 148, 136), "accent": (254, 240, 138),
        "theme": "mermaid"
    },
    {
        "id": "girl_space_explorer",
        "gender": "girl",
        "title": "Space Explorer",
        "bg_top": (252, 231, 243), "bg_bot": (236, 72, 153),
        "skin": (254, 215, 170), "hair": (80, 40, 30),
        "outfit": (219, 39, 119), "accent": (147, 197, 253),
        "theme": "space"
    },
    {
        "id": "girl_nature_guardian",
        "gender": "girl",
        "title": "Nature Guardian",
        "bg_top": (209, 250, 229), "bg_bot": (5, 150, 105),
        "skin": (255, 224, 189), "hair": (70, 45, 20),
        "outfit": (16, 185, 129), "accent": (244, 114, 182),
        "theme": "nature"
    },
    {
        "id": "girl_superhero_girl",
        "gender": "girl",
        "title": "Superhero Girl",
        "bg_top": (254, 215, 170), "bg_bot": (239, 68, 68),
        "skin": (255, 220, 185), "hair": (30, 20, 30),
        "outfit": (220, 38, 38), "accent": (250, 204, 21),
        "theme": "superhero"
    },
    {
        "id": "girl_young_pilot",
        "gender": "girl",
        "title": "Young Pilot",
        "bg_top": (224, 242, 254), "bg_bot": (14, 165, 233),
        "skin": (255, 224, 190), "hair": (100, 50, 30),
        "outfit": (180, 83, 9), "accent": (244, 63, 94),
        "theme": "pilot_girl"
    },
    {
        "id": "girl_unicorn_adventurer",
        "gender": "girl",
        "title": "Unicorn Adventurer",
        "bg_top": (253, 230, 138), "bg_bot": (216, 180, 254),
        "skin": (255, 230, 210), "hair": (244, 114, 182),
        "outfit": (192, 132, 252), "accent": (250, 204, 21),
        "theme": "unicorn"
    },
    {
        "id": "girl_smart_detective",
        "gender": "girl",
        "title": "Smart Detective",
        "bg_top": (254, 243, 199), "bg_bot": (217, 119, 6),
        "skin": (255, 224, 189), "hair": (60, 35, 25),
        "outfit": (180, 83, 9), "accent": (251, 191, 36),
        "theme": "detective_girl"
    },
    {
        "id": "girl_jungle_explorer",
        "gender": "girl",
        "title": "Jungle Explorer",
        "bg_top": (209, 250, 229), "bg_bot": (16, 185, 129),
        "skin": (254, 215, 170), "hair": (50, 30, 20),
        "outfit": (5, 150, 105), "accent": (250, 204, 21),
        "theme": "jungle_girl"
    },
    {
        "id": "girl_little_inventor",
        "gender": "girl",
        "title": "Little Inventor",
        "bg_top": (254, 240, 138), "bg_bot": (202, 138, 4),
        "skin": (255, 220, 180), "hair": (80, 45, 30),
        "outfit": (14, 165, 233), "accent": (245, 158, 11),
        "theme": "inventor_girl"
    },
    {
        "id": "girl_music_star",
        "gender": "girl",
        "title": "Music Star",
        "bg_top": (252, 231, 243), "bg_bot": (219, 39, 119),
        "skin": (255, 225, 190), "hair": (147, 51, 234),
        "outfit": (236, 72, 153), "accent": (250, 204, 21),
        "theme": "music"
    },
    {
        "id": "girl_treasure_hunter",
        "gender": "girl",
        "title": "Treasure Hunter",
        "bg_top": (254, 243, 199), "bg_bot": (217, 119, 6),
        "skin": (255, 220, 185), "hair": (70, 40, 25),
        "outfit": (161, 98, 7), "accent": (251, 191, 36),
        "theme": "treasure_girl"
    },
    {
        "id": "girl_robot_engineer",
        "gender": "girl",
        "title": "Robot Engineer",
        "bg_top": (224, 242, 254), "bg_bot": (2, 132, 199),
        "skin": (255, 224, 189), "hair": (30, 41, 59),
        "outfit": (234, 88, 12), "accent": (56, 189, 248),
        "theme": "engineer"
    },
    {
        "id": "girl_butterfly_explorer",
        "gender": "girl",
        "title": "Butterfly Explorer",
        "bg_top": (243, 232, 255), "bg_bot": (192, 132, 252),
        "skin": (255, 228, 200), "hair": (120, 53, 15),
        "outfit": (168, 85, 247), "accent": (251, 191, 36),
        "theme": "butterfly"
    },
    {
        "id": "girl_english_champion",
        "gender": "girl",
        "title": "English Champion",
        "bg_top": (254, 205, 211), "bg_bot": (225, 29, 72),
        "skin": (255, 224, 189), "hair": (60, 30, 20),
        "outfit": (219, 39, 119), "accent": (250, 204, 21),
        "theme": "champion_girl"
    },
    {
        "id": "girl_dream_explorer",
        "gender": "girl",
        "title": "Dream Explorer",
        "bg_top": (224, 231, 255), "bg_bot": (129, 140, 248),
        "skin": (255, 230, 205), "hair": (99, 102, 241),
        "outfit": (79, 70, 229), "accent": (254, 240, 138),
        "theme": "dream"
    }
]

def render_3d_avatar(av, size=512):
    # Render at 2x (1024x1024) for supreme sharpness and downsample
    dim = size * 2
    img = Image.new("RGBA", (dim, dim), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # 1. Gradient Background
    top_c = av["bg_top"]
    bot_c = av["bg_bot"]
    for y in range(dim):
        t = y / dim
        r = int(top_c[0] * (1 - t) + bot_c[0] * t)
        g = int(top_c[1] * (1 - t) + bot_c[1] * t)
        b = int(top_c[2] * (1 - t) + bot_c[2] * t)
        draw.line([(0, y), (dim, y)], fill=(r, g, b, 255))

    # Add soft circular ambient lighting
    light_layer = Image.new("RGBA", (dim, dim), (0, 0, 0, 0))
    l_draw = ImageDraw.Draw(light_layer)
    cx, cy = dim // 2, int(dim * 0.45)
    l_draw.ellipse([cx - 360, cy - 360, cx + 360, cy + 360], fill=(255, 255, 255, 60))
    light_layer = light_layer.filter(ImageFilter.GaussianBlur(80))
    img.alpha_composite(light_layer)

    # 2. Ambient Shadow under body
    shadow = Image.new("RGBA", (dim, dim), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow)
    s_draw.ellipse([dim//2 - 280, int(dim * 0.88), dim//2 + 280, int(dim * 0.98)], fill=(0, 0, 0, 70))
    shadow = shadow.filter(ImageFilter.GaussianBlur(30))
    img.alpha_composite(shadow)

    # 3. Body & Torso (Layered 3D outfit)
    body_layer = Image.new("RGBA", (dim, dim), (0, 0, 0, 0))
    b_draw = ImageDraw.Draw(body_layer)
    outfit_c = av["outfit"]
    accent_c = av["accent"]

    # Torso curved polygon
    torso_pts = [
        (dim//2 - 240, dim),
        (dim//2 - 160, int(dim * 0.68)),
        (dim//2 + 160, int(dim * 0.68)),
        (dim//2 + 240, dim)
    ]
    b_draw.polygon(torso_pts, fill=outfit_c + (255,))
    
    # Outfit 3D shading / collar / vest
    b_draw.ellipse([dim//2 - 140, int(dim * 0.65), dim//2 + 140, int(dim * 0.75)], fill=(outfit_c[0]//2, outfit_c[1]//2, outfit_c[2]//2, 200))
    
    # Collar / Neckline
    b_draw.polygon([(dim//2 - 60, int(dim * 0.66)), (dim//2, int(dim * 0.74)), (dim//2 + 60, int(dim * 0.66))], fill=(255, 255, 255, 240))
    
    # Decorative Badge / Icon on Chest
    b_draw.ellipse([dim//2 - 28, int(dim * 0.77), dim//2 + 28, int(dim * 0.83)], fill=accent_c + (255,))
    b_draw.ellipse([dim//2 - 20, int(dim * 0.78), dim//2 + 20, int(dim * 0.82)], fill=(255, 255, 255, 230))
    
    # Soft drop shadow for head
    head_shadow = Image.new("RGBA", (dim, dim), (0, 0, 0, 0))
    hs_draw = ImageDraw.Draw(head_shadow)
    hs_draw.ellipse([dim//2 - 170, int(dim * 0.44), dim//2 + 170, int(dim * 0.72)], fill=(0, 0, 0, 60))
    head_shadow = head_shadow.filter(ImageFilter.GaussianBlur(25))
    body_layer.alpha_composite(head_shadow)
    img.alpha_composite(body_layer)

    # 4. Neck & Head
    head_layer = Image.new("RGBA", (dim, dim), (0, 0, 0, 0))
    h_draw = ImageDraw.Draw(head_layer)
    skin_c = av["skin"]

    # Neck
    h_draw.rectangle([dim//2 - 50, int(dim * 0.58), dim//2 + 50, int(dim * 0.68)], fill=skin_c + (255,))
    
    # Face (Chubby round cute cheeks)
    head_rect = [dim//2 - 200, int(dim * 0.22), dim//2 + 200, int(dim * 0.62)]
    h_draw.ellipse(head_rect, fill=skin_c + (255,))

    # Ears
    h_draw.ellipse([dim//2 - 225, int(dim * 0.38), dim//2 - 175, int(dim * 0.48)], fill=skin_c + (255,))
    h_draw.ellipse([dim//2 + 175, int(dim * 0.38), dim//2 + 225, int(dim * 0.48)], fill=skin_c + (255,))
    # Inner ears
    h_draw.ellipse([dim//2 - 215, int(dim * 0.40), dim//2 - 185, int(dim * 0.46)], fill=(255, 170, 160, 200))
    h_draw.ellipse([dim//2 + 185, int(dim * 0.40), dim//2 + 215, int(dim * 0.46)], fill=(255, 170, 160, 200))

    # Cute rosy pink blush on cheeks
    blush_layer = Image.new("RGBA", (dim, dim), (0, 0, 0, 0))
    bl_draw = ImageDraw.Draw(blush_layer)
    bl_draw.ellipse([dim//2 - 145, int(dim * 0.44), dim//2 - 75, int(dim * 0.51)], fill=(244, 63, 94, 95))
    bl_draw.ellipse([dim//2 + 75, int(dim * 0.44), dim//2 + 145, int(dim * 0.51)], fill=(244, 63, 94, 95))
    blush_layer = blush_layer.filter(ImageFilter.GaussianBlur(14))
    head_layer.alpha_composite(blush_layer)

    # Nose
    h_draw.ellipse([dim//2 - 12, int(dim * 0.42), dim//2 + 12, int(dim * 0.45)], fill=(230, 150, 130, 220))

    # Big Expressive Eyes
    # Sclera (White)
    h_draw.ellipse([dim//2 - 110, int(dim * 0.34), dim//2 - 30, int(dim * 0.45)], fill=(255, 255, 255, 255))
    h_draw.ellipse([dim//2 + 30, int(dim * 0.34), dim//2 + 110, int(dim * 0.45)], fill=(255, 255, 255, 255))

    # Iris (Rich warm color)
    iris_c = (55, 40, 30) if av["gender"] == "boy" else (60, 35, 45)
    h_draw.ellipse([dim//2 - 95, int(dim * 0.345), dim//2 - 45, int(dim * 0.445)], fill=iris_c + (255,))
    h_draw.ellipse([dim//2 + 45, int(dim * 0.345), dim//2 + 95, int(dim * 0.445)], fill=iris_c + (255,))

    # Pupil
    h_draw.ellipse([dim//2 - 85, int(dim * 0.36), dim//2 - 55, int(dim * 0.43)], fill=(15, 10, 10, 255))
    h_draw.ellipse([dim//2 + 55, int(dim * 0.36), dim//2 + 85, int(dim * 0.43)], fill=(15, 10, 10, 255))

    # Eye Highlights (Glossy sparkle reflection)
    h_draw.ellipse([dim//2 - 82, int(dim * 0.365), dim//2 - 68, int(dim * 0.395)], fill=(255, 255, 255, 255))
    h_draw.ellipse([dim//2 - 64, int(dim * 0.405), dim//2 - 56, int(dim * 0.42)], fill=(255, 255, 255, 220))
    h_draw.ellipse([dim//2 + 58, int(dim * 0.365), dim//2 + 72, int(dim * 0.395)], fill=(255, 255, 255, 255))
    h_draw.ellipse([dim//2 + 76, int(dim * 0.405), dim//2 + 84, int(dim * 0.42)], fill=(255, 255, 255, 220))

    # Eyelashes for girls
    if av["gender"] == "girl":
        h_draw.arc([dim//2 - 110, int(dim * 0.32), dim//2 - 30, int(dim * 0.40)], start=180, end=360, fill=(30, 20, 20, 255), width=6)
        h_draw.arc([dim//2 + 30, int(dim * 0.32), dim//2 + 110, int(dim * 0.40)], start=180, end=360, fill=(30, 20, 20, 255), width=6)
        # Cute lash wings
        h_draw.line([(dim//2 - 30, int(dim * 0.36)), (dim//2 - 18, int(dim * 0.33))], fill=(30, 20, 20, 255), width=5)
        h_draw.line([(dim//2 + 110, int(dim * 0.36)), (dim//2 + 122, int(dim * 0.33))], fill=(30, 20, 20, 255), width=5)

    # Eyebrows
    h_draw.arc([dim//2 - 105, int(dim * 0.28), dim//2 - 35, int(dim * 0.35)], start=190, end=350, fill=(av["hair"][0]//2, av["hair"][1]//2, av["hair"][2]//2, 255), width=9)
    h_draw.arc([dim//2 + 35, int(dim * 0.28), dim//2 + 105, int(dim * 0.35)], start=190, end=350, fill=(av["hair"][0]//2, av["hair"][1]//2, av["hair"][2]//2, 255), width=9)

    # Warm, Cheerful Smile
    h_draw.chord([dim//2 - 50, int(dim * 0.47), dim//2 + 50, int(dim * 0.56)], start=0, end=180, fill=(225, 29, 72, 255), outline=(180, 20, 50, 255), width=3)
    # White teeth
    h_draw.chord([dim//2 - 38, int(dim * 0.47), dim//2 + 38, int(dim * 0.51)], start=0, end=180, fill=(255, 255, 255, 255))

    img.alpha_composite(head_layer)

    # 5. Hair & Themed Headwear / Accessories
    hair_layer = Image.new("RGBA", (dim, dim), (0, 0, 0, 0))
    hr_draw = ImageDraw.Draw(hair_layer)
    hair_c = av["hair"]

    # Hair base
    if av["gender"] == "girl":
        # Long flowing or twin braids
        hr_draw.ellipse([dim//2 - 210, int(dim * 0.16), dim//2 + 210, int(dim * 0.46)], fill=hair_c + (255,))
        # Hair sides
        hr_draw.ellipse([dim//2 - 225, int(dim * 0.32), dim//2 - 130, int(dim * 0.70)], fill=hair_c + (255,))
        hr_draw.ellipse([dim//2 + 130, int(dim * 0.32), dim//2 + 225, int(dim * 0.70)], fill=hair_c + (255,))
    else:
        # Boy cute stylish hair
        hr_draw.ellipse([dim//2 - 205, int(dim * 0.14), dim//2 + 205, int(dim * 0.42)], fill=hair_c + (255,))
        # Fluffy tufts
        hr_draw.ellipse([dim//2 - 140, int(dim * 0.12), dim//2 - 30, int(dim * 0.32)], fill=hair_c + (255,))
        hr_draw.ellipse([dim//2 + 30, int(dim * 0.12), dim//2 + 140, int(dim * 0.32)], fill=hair_c + (255,))
        hr_draw.ellipse([dim//2 - 50, int(dim * 0.10), dim//2 + 50, int(dim * 0.28)], fill=hair_c + (255,))

    # THEMED ACCESSORIES & HATS
    t = av["theme"]
    if "dino" in t:
        # Dino hoodie spikes
        for ox in [-80, 0, 80]:
            hr_draw.polygon([(dim//2 + ox - 20, int(dim * 0.18)), (dim//2 + ox, int(dim * 0.08)), (dim//2 + ox + 20, int(dim * 0.18))], fill=(245, 158, 11, 255))
    elif "pilot" in t:
        # Aviator goggles on forehead
        hr_draw.rectangle([dim//2 - 150, int(dim * 0.22), dim//2 + 150, int(dim * 0.28)], fill=(120, 53, 15, 255))
        hr_draw.ellipse([dim//2 - 110, int(dim * 0.18), dim//2 - 20, int(dim * 0.32)], fill=(56, 189, 248, 220), outline=(245, 158, 11, 255), width=8)
        hr_draw.ellipse([dim//2 + 20, int(dim * 0.18), dim//2 + 110, int(dim * 0.32)], fill=(56, 189, 248, 220), outline=(245, 158, 11, 255), width=8)
    elif "treasure" in t:
        # Fedora hat
        hr_draw.ellipse([dim//2 - 230, int(dim * 0.24), dim//2 + 230, int(dim * 0.32)], fill=(161, 98, 7, 255))
        hr_draw.ellipse([dim//2 - 150, int(dim * 0.10), dim//2 + 150, int(dim * 0.28)], fill=(180, 83, 9, 255))
    elif "hero" in t or "superhero" in t:
        # Hero mask / headband
        hr_draw.rectangle([dim//2 - 160, int(dim * 0.28), dim//2 + 160, int(dim * 0.34)], fill=(250, 204, 21, 255))
        hr_draw.ellipse([dim//2 - 25, int(dim * 0.27), dim//2 + 25, int(dim * 0.35)], fill=(225, 29, 72, 255))
    elif "princess" in t or "star" in t:
        # Golden Tiara / Crown
        hr_draw.polygon([
            (dim//2 - 80, int(dim * 0.20)),
            (dim//2 - 60, int(dim * 0.12)),
            (dim//2 - 20, int(dim * 0.17)),
            (dim//2, int(dim * 0.08)),
            (dim//2 + 20, int(dim * 0.17)),
            (dim//2 + 60, int(dim * 0.12)),
            (dim//2 + 80, int(dim * 0.20))
        ], fill=(251, 191, 36, 255), outline=(217, 119, 6, 255))
        hr_draw.ellipse([dim//2 - 10, int(dim * 0.09), dim//2 + 10, int(dim * 0.12)], fill=(244, 63, 94, 255))
    elif "unicorn" in t:
        # Golden unicorn horn
        hr_draw.polygon([(dim//2 - 20, int(dim * 0.20)), (dim//2, int(dim * 0.04)), (dim//2 + 20, int(dim * 0.20))], fill=(250, 204, 21, 255))
    elif "detective" in t:
        # Houndstooth detective cap
        hr_draw.ellipse([dim//2 - 180, int(dim * 0.16), dim//2 + 180, int(dim * 0.28)], fill=(120, 80, 50, 255))
        hr_draw.ellipse([dim//2 - 140, int(dim * 0.10), dim//2 + 140, int(dim * 0.24)], fill=(140, 100, 60, 255))
    elif "music" in t:
        # Cat-ear headphones
        hr_draw.arc([dim//2 - 210, int(dim * 0.12), dim//2 + 210, int(dim * 0.44)], start=180, end=360, fill=(236, 72, 153, 255), width=16)
        hr_draw.ellipse([dim//2 - 225, int(dim * 0.36), dim//2 - 185, int(dim * 0.48)], fill=(244, 114, 182, 255))
        hr_draw.ellipse([dim//2 + 185, int(dim * 0.36), dim//2 + 225, int(dim * 0.48)], fill=(244, 114, 182, 255))

    img.alpha_composite(hair_layer)

    # Downsample to 512x512 with high quality Lanczos filter
    final_img = img.resize((size, size), Image.Resampling.LANCZOS)
    return final_img

# Generate and save all remaining 30 avatars
for av in REMAINING_AVATARS:
    img = render_3d_avatar(av, size=512)
    path = os.path.join(OUTPUT_DIR, f"{av['id']}.webp")
    img.save(path, "WEBP", quality=92)
    print(f"Generated {av['id']}.webp ({os.path.getsize(path)} bytes)")
print("ALL 30 REMAINING AVATARS GENERATED SUCCESSFULLY!")
