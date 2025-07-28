// Application data
const appData = {
  cameras: {
    "Canon": ["EOS R5 Mark II", "EOS R6 Mark II", "EOS R8", "EOS R3", "5D Mark IV", "90D"],
    "Nikon": ["Z8", "Z6 III", "Z7 II", "Z5 II", "D850", "D780"],
    "Sony": ["A7 IV", "A7R V", "A1 II", "A7S III", "A7C", "FX3"],
    "Fujifilm": ["X-T5", "X-H2S", "GFX 100S", "X-Pro3", "X-S20"],
    "Panasonic": ["S5 II", "GH7", "S1R", "G9 II", "FZ2500"]
  },
  apertureSettings: {
    "Wide Aperture": {
      "values": ["f/1.4", "f/1.8", "f/2.8"],
      "description": "Creates shallow depth of field, perfect for portraits and low light",
      "use_cases": ["Portrait photography", "Low light situations", "Subject isolation", "Bokeh effects"]
    },
    "Standard Aperture": {
      "values": ["f/4", "f/5.6"],
      "description": "Balanced depth and sharpness for general photography",
      "use_cases": ["General photography", "Street photography", "Travel", "Everyday shooting"]
    },
    "Narrow Aperture": {
      "values": ["f/8", "f/11", "f/16"],
      "description": "Deep depth of field ensuring sharp focus throughout the scene",
      "use_cases": ["Landscape photography", "Architecture", "Group photos", "Maximum sharpness"]
    }
  },
  lightingConditions: {
    "Indoor": {
      "options": ["Studio lighting", "Artificial light", "Tungsten", "Fluorescent", "LED panels"],
      "description": "Controlled lighting environments for consistent results"
    },
    "Outdoor": {
      "options": ["Natural sunlight", "Golden hour", "Blue hour", "Harsh sunlight", "Overcast"],
      "description": "Natural lighting that changes throughout the day"
    },
    "Natural": {
      "options": ["Soft diffused", "Window light", "Ambient light", "Reflected light"],
      "description": "Gentle, naturally occurring light sources"
    },
    "Creative": {
      "options": ["Dramatic lighting", "Rim lighting", "Backlighting", "Moody shadows", "Color gels"],
      "description": "Artistic lighting techniques for creative expression"
    }
  },
  helpContent: {
    "subject": {
      "tooltip": "Define the main focus of your photograph",
      "detailed": "The subject is the primary focus of your image - what you want viewers to notice first. This could be a person, object, animal, or scene. Be specific about characteristics like age, gender, expression, or notable features. A well-defined subject helps create compelling and focused images.",
      "use_cases": ["Portrait subjects", "Product photography", "Wildlife", "Architecture", "Still life objects"]
    },
    "context": {
      "tooltip": "Provide additional context about the setting, lighting conditions, or overall mood of the shoot",
      "detailed": "Context helps define the overall scenario, environment, and situational details for your photograph. This can include lighting conditions, location details, mood, or specific shooting circumstances that influence the final image. Context provides the situational framework that supports and enhances your subject.",
      "use_cases": ["Lighting scenarios", "Environmental conditions", "Shooting circumstances", "Mood establishment", "Technical context"]
    },
    "descriptors": {
      "tooltip": "Add specific details to enhance your prompt",
      "detailed": "Additional descriptors help refine and specify exactly what you want in your image. Include details about clothing, expressions, poses, colors, textures, or any other elements that will make your vision more precise and unique.",
      "use_cases": ["Clothing styles", "Facial expressions", "Color schemes", "Textures", "Props and accessories"]
    },
    "physical_attributes": {
      "tooltip": "Define human physical characteristics",
      "detailed": "Physical attributes help define the overall appearance and presence of human subjects in your image. Height affects composition and framing needs. Build influences lighting and posing choices. Skin tone affects lighting color temperature. Age appearance guides styling choices. These attributes work together to create a complete physical description for AI generation.",
      "use_cases": ["Portrait composition", "Character development", "Realistic representation", "Diversity inclusion", "Specific casting"]
    },
    "facial_features": {
      "tooltip": "Specify facial expressions and features",
      "detailed": "Facial features and expressions are crucial for portrait photography and human subjects. Expression sets the emotional tone - smiling for warmth, serious for professional shots. Eye shape and eyebrow style influence the overall facial structure. Nose and jawline affect profile considerations. Lip shape impacts the overall facial harmony. These elements combine to create compelling and specific facial characteristics.",
      "use_cases": ["Portrait refinement", "Emotional storytelling", "Character specificity", "Professional headshots", "Creative expression"]
    },
    "physical_features": {
      "tooltip": "Add distinctive physical details",
      "detailed": "Physical features add personality and distinctiveness to your subject. Hair length and style affect composition and framing. Hair color influences lighting and color balance. Facial hair adds character and can affect lighting shadows. Accessories like glasses or jewelry add visual interest. Clothing style sets the overall aesthetic. Body art like tattoos can be focal points or subtle details.",
      "use_cases": ["Style definition", "Personal branding", "Character development", "Fashion photography", "Cultural representation"]
    },
    "environmental_attributes": {
      "tooltip": "Set the scene and location context",
      "detailed": "Environmental attributes establish the setting and context for your photograph. Indoor scenes offer controlled lighting but require different approaches than outdoor settings. Urban environments provide dynamic backgrounds with architectural elements. Natural settings offer organic textures and lighting conditions. The environment choice affects everything from lighting setup to composition approach and overall mood.",
      "use_cases": ["Scene setting", "Mood establishment", "Narrative context", "Location scouting", "Atmospheric creation"]
    },
    "camera_selection": {
      "tooltip": "Choose your camera model for optimized settings",
      "detailed": "Different cameras excel in different scenarios. DSLRs offer traditional controls and long battery life. Mirrorless cameras provide compact size, electronic viewfinders, and excellent video capabilities. Consider your shooting style: Canon for balanced performance, Sony for cutting-edge autofocus, Nikon for traditional controls, Fujifilm for film-like colors, Panasonic for video features.",
      "use_cases": ["Portrait photography", "Landscape work", "Street photography", "Professional shoots", "Video content"]
    },
    "aperture": {
      "tooltip": "Controls depth of field and exposure",
      "detailed": "Aperture (f-stop) determines how much of your image is in sharp focus. Wide apertures (f/1.4-f/2.8) create shallow depth of field - perfect for portraits where you want the subject sharp and background blurred. Narrow apertures (f/8-f/16) keep everything in focus - ideal for landscapes. Also affects exposure: wider apertures let in more light.",
      "use_cases": ["Portrait backgrounds", "Landscape sharpness", "Low light photography", "Creative bokeh effects"]
    },
    "lighting": {
      "tooltip": "Sets the mood and technical requirements",
      "detailed": "Lighting is the foundation of photography. Golden hour (sunrise/sunset) provides warm, soft light that's universally flattering. Blue hour creates moody, atmospheric images. Studio lighting offers complete control but requires equipment. Window light is soft and natural for portraits. Choose based on your subject, available equipment, and desired mood.",
      "use_cases": ["Natural portraits", "Dramatic scenes", "Product photography", "Mood creation", "Technical control"]
    },
    "style_mood": {
      "tooltip": "Defines the artistic direction of your image",
      "detailed": "Style determines the overall look and feel of your photograph. Portrait style focuses on people and expressions. Landscape emphasizes natural scenery. Street photography captures candid moments. Fashion is about clothing and style. Documentary tells stories. Choose a style that matches your subject and artistic vision.",
      "use_cases": ["Personal branding", "Commercial work", "Artistic expression", "Storytelling", "Technical documentation"]
    },
    "artistic_mood": {
      "tooltip": "Sets the emotional tone of your image",
      "detailed": "Artistic mood influences how viewers feel when looking at your image. Dramatic moods use strong contrasts and bold elements. Soft moods emphasize gentleness and subtlety. Vintage adds nostalgic feelings. Modern feels clean and contemporary. Choose a mood that supports your story.",
      "use_cases": ["Emotional storytelling", "Brand personality", "Artistic expression", "Client preferences", "Genre conventions"]
    },
    "color_treatment": {
      "tooltip": "Determines the color palette and processing",
      "detailed": "Color treatment affects the overall feel and visual impact of your image. Warm tones create cozy, inviting feelings. Cool tones suggest calm or drama. Monochrome focuses on contrast and form. High contrast creates impact, while muted colors feel subtle and refined.",
      "use_cases": ["Brand consistency", "Emotional impact", "Artistic style", "Technical requirements", "Client preferences"]
    },
    "composition": {
      "tooltip": "Guides how elements are arranged in your frame",
      "detailed": "Composition techniques help create visually pleasing and impactful images. Rule of thirds places subjects on intersecting lines for balance. Leading lines draw the eye through the image. Symmetry creates order and balance. Negative space emphasizes your subject. Experiment with different techniques to enhance your storytelling.",
      "use_cases": ["Visual balance", "Eye movement", "Subject emphasis", "Professional polish", "Artistic impact"]
    },
    "advanced_composition": {
      "tooltip": "Sophisticated techniques for professional results",
      "detailed": "Advanced composition techniques add depth and sophistication to your images. Layering creates visual depth by placing elements at different distances. Patterns and textures add visual interest. Juxtaposition creates meaning through contrast. These techniques require practice but create compelling results.",
      "use_cases": ["Professional photography", "Fine art", "Complex scenes", "Visual storytelling", "Technical mastery"]
    },
    "creative_angles": {
      "tooltip": "Unique perspectives to make your images stand out",
      "detailed": "Creative angles change how viewers perceive your subject. Low angles make subjects appear powerful or imposing. High angles can make subjects seem vulnerable or provide overview perspectives. Dutch angles create dynamic tension. Close-ups reveal details while wide shots show context.",
      "use_cases": ["Dynamic portraits", "Architectural photography", "Creative expression", "Visual variety", "Storytelling enhancement"]
    },
    "color_template": {
      "tooltip": "Select an overall color palette or grading style for your image",
      "detailed": "Color templates provide predefined color schemes that establish a specific aesthetic and emotional tone. Teal & Orange creates cinematic contrast popular in Hollywood films. Vintage Sepia adds nostalgic warmth. Pastel Dream creates soft, dreamy atmospheres. Each template influences the overall color grading, saturation levels, and color relationships in your image.",
      "use_cases": ["Cinematic aesthetics", "Brand consistency", "Mood establishment", "Genre conventions", "Artistic coherence"]
    },
    "film_emulation": {
      "tooltip": "Choose a classic film stock emulation to influence tone, grain, and color response",
      "detailed": "Film emulation recreates the distinctive characteristics of classic analog film stocks. Each film type has unique color response, contrast curves, and grain patterns. Kodak Portra offers natural skin tones, Fuji Velvia provides vibrant landscapes, Tri-X creates classic black & white contrast. Film emulation adds authentic analog character and can dramatically influence the final aesthetic.",
      "use_cases": ["Analog aesthetics", "Nostalgic atmosphere", "Professional color grading", "Genre authenticity", "Artistic expression"]
    },
    "guidance_scale": {
      "tooltip": "Controls how strongly the prompt guides generation. Higher = stricter adherence.",
      "detailed": "Guidance scale determines how closely the AI follows your prompt. Lower values (1-5) allow more creative interpretation and variation, which can lead to unexpected but interesting results. Higher values (15-30) stick more closely to your prompt but may produce less creative variations. The sweet spot is usually between 7-12 for most prompts.",
      "use_cases": ["Creative experimentation", "Prompt adherence control", "Fine-tuning results", "Balancing creativity vs accuracy"]
    },
    "inference_steps": {
      "tooltip": "Number of diffusion iterations; more steps may improve quality but take longer.",
      "detailed": "Inference steps control how many iterations the AI uses to generate your image. More steps generally mean higher quality and more refined details, but take longer to process. 20-30 steps are often sufficient for good results, while 50-100 steps provide maximum quality. Very high step counts (100+) may not always improve results significantly.",
      "use_cases": ["Quality optimization", "Time vs quality trade-offs", "Final production images", "Quick previews vs final renders"]
    },
    "resolution": {
      "tooltip": "Output size; larger resolutions require more resources.",
      "detailed": "Resolution determines the size and detail level of your generated image. Higher resolutions provide more detail and allow for larger prints, but require more processing power and time. Consider your intended use: social media (512×512), web use (768×768), or high-quality prints (1024×1024 or higher).",
      "use_cases": ["Print quality", "Web optimization", "Social media", "Professional presentations", "Detailed artwork"]
    }
  }
};

// Global variables
let elements = {};
let isTooltipVisible = false;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeElements();
  initializeEventListeners();
  generatePrompt(); // Generate initial empty prompt
});

// Initialize DOM elements
function initializeElements() {
  elements = {
    // Basic elements
    subject: document.getElementById('subject'),
    context: document.getElementById('context'),
    descriptors: document.getElementById('descriptors'),
    
    // Physical attributes
    height: document.getElementById('height'),
    heightOther: document.getElementById('height-other'),
    build: document.getElementById('build'),
    buildOther: document.getElementById('build-other'),
    skinTone: document.getElementById('skin-tone'),
    skinToneOther: document.getElementById('skin-tone-other'),
    ageAppearance: document.getElementById('age-appearance'),
    ageAppearanceOther: document.getElementById('age-appearance-other'),
    posture: document.getElementById('posture'),
    postureOther: document.getElementById('posture-other'),
    
    // Facial features
    expression: document.getElementById('expression'),
    expressionOther: document.getElementById('expression-other'),
    eyes: document.getElementById('eyes'),
    eyesOther: document.getElementById('eyes-other'),
    eyebrows: document.getElementById('eyebrows'),
    eyebrowsOther: document.getElementById('eyebrows-other'),
    nose: document.getElementById('nose'),
    noseOther: document.getElementById('nose-other'),
    jawline: document.getElementById('jawline'),
    jawlineOther: document.getElementById('jawline-other'),
    lips: document.getElementById('lips'),
    lipsOther: document.getElementById('lips-other'),
    
    // Physical features
    hair: document.getElementById('hair'),
    hairOther: document.getElementById('hair-other'),
    hairColor: document.getElementById('hair-color'),
    hairColorOther: document.getElementById('hair-color-other'),
    facialHair: document.getElementById('facial-hair'),
    facialHairOther: document.getElementById('facial-hair-other'),
    accessories: document.getElementById('accessories'),
    accessoriesOther: document.getElementById('accessories-other'),
    clothingStyle: document.getElementById('clothing-style'),
    clothingStyleOther: document.getElementById('clothing-style-other'),
    bodyArt: document.getElementById('body-art'),
    bodyArtOther: document.getElementById('body-art-other'),
    
    // Environmental attributes
    indoorScenes: document.getElementById('indoor-scenes'),
    indoorScenesOther: document.getElementById('indoor-scenes-other'),
    outdoorScenes: document.getElementById('outdoor-scenes'),
    outdoorScenesOther: document.getElementById('outdoor-scenes-other'),
    urbanSettings: document.getElementById('urban-settings'),
    urbanSettingsOther: document.getElementById('urban-settings-other'),
    naturalSettings: document.getElementById('natural-settings'),
    naturalSettingsOther: document.getElementById('natural-settings-other'),
    architectural: document.getElementById('architectural'),
    architecturalOther: document.getElementById('architectural-other'),
    
    // Technical elements
    cameraBrand: document.getElementById('camera-brand'),
    cameraBrandOther: document.getElementById('camera-brand-other'),
    cameraModel: document.getElementById('camera-model'),
    cameraModelOther: document.getElementById('camera-model-other'),
    cameraModelGroup: document.getElementById('camera-model-group'),
    apertureCategory: document.getElementById('aperture-category'),
    apertureCategoryOther: document.getElementById('aperture-category-other'),
    apertureValue: document.getElementById('aperture-value'),
    apertureValueOther: document.getElementById('aperture-value-other'),
    apertureValueGroup: document.getElementById('aperture-value-group'),
    lightingCategory: document.getElementById('lighting-category'),
    lightingCategoryOther: document.getElementById('lighting-category-other'),
    lightingOption: document.getElementById('lighting-option'),
    lightingOptionOther: document.getElementById('lighting-option-other'),
    lightingOptionGroup: document.getElementById('lighting-option-group'),
    
    // Style and mood
    photoStyle: document.getElementById('photo-style'),
    photoStyleOther: document.getElementById('photo-style-other'),
    artisticMood: document.getElementById('artistic-mood'),
    artisticMoodOther: document.getElementById('artistic-mood-other'),
    colorTreatment: document.getElementById('color-treatment'),
    colorTreatmentOther: document.getElementById('color-treatment-other'),
    
    // Composition
    classicComposition: document.getElementById('classic-composition'),
    classicCompositionOther: document.getElementById('classic-composition-other'),
    advancedComposition: document.getElementById('advanced-composition'),
    advancedCompositionOther: document.getElementById('advanced-composition-other'),
    creativeAngles: document.getElementById('creative-angles'),
    creativeAnglesOther: document.getElementById('creative-angles-other'),
    
    // Color and film elements
    colorTemplate: document.getElementById('color-template'),
    colorTemplateOther: document.getElementById('color-template-other'),
    filmEmulation: document.getElementById('film-emulation'),
    filmEmulationOther: document.getElementById('film-emulation-other'),
    
    // Technical parameters
    guidanceScale: document.getElementById('guidance-scale'),
    guidanceScaleValue: document.getElementById('guidance-scale-value'),
    inferenceSteps: document.getElementById('inference-steps'),
    inferenceStepsValue: document.getElementById('inference-steps-value'),
    resolution: document.getElementById('resolution'),
    resolutionOther: document.getElementById('resolution-other'),
    
    // Output elements
    generatedPrompt: document.getElementById('generated-prompt'),
    alternativePrompt: document.getElementById('alternative-prompt'),
    copyBtn1: document.getElementById('copy-btn-1'),
    copyBtn2: document.getElementById('copy-btn-2'),
    resetBtn: document.getElementById('reset-btn'),
    generateBtn: document.getElementById('generate-btn'),
    
    // Modal elements
    helpModal: document.getElementById('help-modal'),
    modalTitle: document.getElementById('modal-title'),
    modalDescription: document.getElementById('modal-description'),
    modalUseCases: document.getElementById('modal-use-cases'),
    modalClose: document.getElementById('modal-close'),
    modalBackdrop: document.getElementById('modal-backdrop'),
    tooltip: document.getElementById('tooltip')
  };
}

// Event listeners
function initializeEventListeners() {
  // Dropdown cascading
  if (elements.cameraBrand) {
    elements.cameraBrand.addEventListener('change', handleCameraBrandChange);
  }
  if (elements.apertureCategory) {
    elements.apertureCategory.addEventListener('change', handleApertureCategoryChange);
  }
  if (elements.lightingCategory) {
    elements.lightingCategory.addEventListener('change', handleLightingCategoryChange);
  }

  // Slider event listeners with proper event types
  if (elements.guidanceScale) {
    elements.guidanceScale.addEventListener('input', handleGuidanceScaleChange);
    elements.guidanceScale.addEventListener('change', handleGuidanceScaleChange);
  }
  if (elements.inferenceSteps) {
    elements.inferenceSteps.addEventListener('input', handleInferenceStepsChange);
    elements.inferenceSteps.addEventListener('change', handleInferenceStepsChange);
  }

  // Handle "Other" option for all dropdowns
  const dropdownPairs = [
    [elements.height, elements.heightOther],
    [elements.build, elements.buildOther],
    [elements.skinTone, elements.skinToneOther],
    [elements.ageAppearance, elements.ageAppearanceOther],
    [elements.posture, elements.postureOther],
    [elements.expression, elements.expressionOther],
    [elements.eyes, elements.eyesOther],
    [elements.eyebrows, elements.eyebrowsOther],
    [elements.nose, elements.noseOther],
    [elements.jawline, elements.jawlineOther],
    [elements.lips, elements.lipsOther],
    [elements.hair, elements.hairOther],
    [elements.hairColor, elements.hairColorOther],
    [elements.facialHair, elements.facialHairOther],
    [elements.accessories, elements.accessoriesOther],
    [elements.clothingStyle, elements.clothingStyleOther],
    [elements.bodyArt, elements.bodyArtOther],
    [elements.indoorScenes, elements.indoorScenesOther],
    [elements.outdoorScenes, elements.outdoorScenesOther],
    [elements.urbanSettings, elements.urbanSettingsOther],
    [elements.naturalSettings, elements.naturalSettingsOther],
    [elements.architectural, elements.architecturalOther],
    [elements.cameraBrand, elements.cameraBrandOther],
    [elements.cameraModel, elements.cameraModelOther],
    [elements.apertureCategory, elements.apertureCategoryOther],
    [elements.apertureValue, elements.apertureValueOther],
    [elements.lightingCategory, elements.lightingCategoryOther],
    [elements.lightingOption, elements.lightingOptionOther],
    [elements.photoStyle, elements.photoStyleOther],
    [elements.artisticMood, elements.artisticMoodOther],
    [elements.colorTreatment, elements.colorTreatmentOther],
    [elements.classicComposition, elements.classicCompositionOther],
    [elements.advancedComposition, elements.advancedCompositionOther],
    [elements.creativeAngles, elements.creativeAnglesOther],
    [elements.colorTemplate, elements.colorTemplateOther],
    [elements.filmEmulation, elements.filmEmulationOther],
    [elements.resolution, elements.resolutionOther]
  ];

  dropdownPairs.forEach(([dropdown, otherInput]) => {
    if (dropdown && otherInput) {
      dropdown.addEventListener('change', () => handleOtherOptionChange(dropdown, otherInput));
    }
  });

  // Real-time prompt generation - Get all form inputs
  const allInputs = Object.values(elements).filter(el => 
    el && el.nodeType === 1 && (el.tagName === 'INPUT' || el.tagName === 'SELECT' || el.tagName === 'TEXTAREA')
  );

  allInputs.forEach(input => {
    if (input) {
      input.addEventListener('input', generatePrompt);
      input.addEventListener('change', generatePrompt);
    }
  });

  // Help icons
  const helpIcons = document.querySelectorAll('.help-icon');
  helpIcons.forEach(icon => {
    icon.addEventListener('click', handleHelpClick);
    icon.addEventListener('mouseenter', handleHelpHover);
    icon.addEventListener('mouseleave', hideTooltip);
    icon.addEventListener('mousemove', updateTooltipPosition);
  });

  // Copy buttons
  if (elements.copyBtn1) {
    elements.copyBtn1.addEventListener('click', () => copyToClipboard(elements.generatedPrompt.value, elements.copyBtn1));
  }
  if (elements.copyBtn2) {
    elements.copyBtn2.addEventListener('click', () => copyToClipboard(elements.alternativePrompt.value, elements.copyBtn2));
  }

  // Reset and generate buttons
  if (elements.resetBtn) {
    elements.resetBtn.addEventListener('click', resetAll);
  }
  if (elements.generateBtn) {
    elements.generateBtn.addEventListener('click', generatePrompt);
  }

  // Modal controls
  if (elements.modalClose) {
    elements.modalClose.addEventListener('click', closeModal);
  }
  if (elements.modalBackdrop) {
    elements.modalBackdrop.addEventListener('click', closeModal);
  }
  
  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Prevent form submission
  document.addEventListener('submit', (e) => {
    e.preventDefault();
  });
}

// Handle guidance scale slider change
function handleGuidanceScaleChange() {
  if (elements.guidanceScale && elements.guidanceScaleValue) {
    elements.guidanceScaleValue.textContent = elements.guidanceScale.value;
  }
  generatePrompt();
}

// Handle inference steps slider change
function handleInferenceStepsChange() {
  if (elements.inferenceSteps && elements.inferenceStepsValue) {
    elements.inferenceStepsValue.textContent = elements.inferenceSteps.value;
  }
  generatePrompt();
}

// Handle "Other" option change
function handleOtherOptionChange(dropdown, otherInput) {
  if (dropdown.value === 'Other') {
    otherInput.classList.remove('hidden');
    otherInput.focus();
  } else {
    otherInput.classList.add('hidden');
    otherInput.value = '';
  }
  generatePrompt();
}

// Camera brand change handler
function handleCameraBrandChange() {
  const selectedBrand = elements.cameraBrand.value;
  
  if (selectedBrand && selectedBrand !== 'Other' && appData.cameras[selectedBrand]) {
    populateDropdown(elements.cameraModel, appData.cameras[selectedBrand]);
    elements.cameraModelGroup.style.display = 'block';
  } else {
    elements.cameraModelGroup.style.display = 'none';
    elements.cameraModel.value = '';
  }
  handleOtherOptionChange(elements.cameraBrand, elements.cameraBrandOther);
}

// Aperture category change handler
function handleApertureCategoryChange() {
  const selectedCategory = elements.apertureCategory.value;
  
  if (selectedCategory && selectedCategory !== 'Other' && appData.apertureSettings[selectedCategory]) {
    populateDropdown(elements.apertureValue, appData.apertureSettings[selectedCategory].values);
    elements.apertureValueGroup.style.display = 'block';
  } else {
    elements.apertureValueGroup.style.display = 'none';
    elements.apertureValue.value = '';
  }
  handleOtherOptionChange(elements.apertureCategory, elements.apertureCategoryOther);
}

// Lighting category change handler
function handleLightingCategoryChange() {
  const selectedCategory = elements.lightingCategory.value;
  
  if (selectedCategory && selectedCategory !== 'Other' && appData.lightingConditions[selectedCategory]) {
    populateDropdown(elements.lightingOption, appData.lightingConditions[selectedCategory].options);
    elements.lightingOptionGroup.style.display = 'block';
  } else {
    elements.lightingOptionGroup.style.display = 'none';
    elements.lightingOption.value = '';
  }
  handleOtherOptionChange(elements.lightingCategory, elements.lightingCategoryOther);
}

// Populate dropdown helper
function populateDropdown(selectElement, options) {
  if (!selectElement) return;
  
  selectElement.innerHTML = '<option value="">None</option>';
  options.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option;
    optionElement.textContent = option;
    selectElement.appendChild(optionElement);
  });
  
  // Add "Other" option
  const otherOption = document.createElement('option');
  otherOption.value = 'Other';
  otherOption.textContent = 'Other';
  selectElement.appendChild(otherOption);
}

// Get value from dropdown or other input
function getDropdownValue(dropdown, otherInput) {
  if (!dropdown) return '';
  
  if (dropdown.value === 'Other' && otherInput && otherInput.value.trim()) {
    return otherInput.value.trim();
  }
  
  return dropdown.value === 'None' ? '' : dropdown.value;
}

// Generate prompt
function generatePrompt() {
  if (!elements.generatedPrompt || !elements.alternativePrompt) return;
  
  const promptParts = [];
  
  // Subject
  if (elements.subject && elements.subject.value.trim()) {
    promptParts.push(elements.subject.value.trim());
  }
  
  // Physical attributes
  const physicalAttributes = [];
  const height = getDropdownValue(elements.height, elements.heightOther);
  if (height) physicalAttributes.push(height.toLowerCase());
  
  const build = getDropdownValue(elements.build, elements.buildOther);
  if (build) physicalAttributes.push(build.toLowerCase());
  
  const skinTone = getDropdownValue(elements.skinTone, elements.skinToneOther);
  if (skinTone) physicalAttributes.push(`${skinTone.toLowerCase()} skin`);
  
  const ageAppearance = getDropdownValue(elements.ageAppearance, elements.ageAppearanceOther);
  if (ageAppearance) physicalAttributes.push(ageAppearance.toLowerCase());
  
  const posture = getDropdownValue(elements.posture, elements.postureOther);
  if (posture) physicalAttributes.push(`${posture.toLowerCase()} posture`);
  
  if (physicalAttributes.length > 0) {
    promptParts.push(physicalAttributes.join(', '));
  }
  
  // Facial features
  const facialFeatures = [];
  const expression = getDropdownValue(elements.expression, elements.expressionOther);
  if (expression) facialFeatures.push(expression.toLowerCase());
  
  const eyes = getDropdownValue(elements.eyes, elements.eyesOther);
  if (eyes) facialFeatures.push(eyes.toLowerCase());
  
  const eyebrows = getDropdownValue(elements.eyebrows, elements.eyebrowsOther);
  if (eyebrows) facialFeatures.push(eyebrows.toLowerCase());
  
  const nose = getDropdownValue(elements.nose, elements.noseOther);
  if (nose) facialFeatures.push(nose.toLowerCase());
  
  const jawline = getDropdownValue(elements.jawline, elements.jawlineOther);
  if (jawline) facialFeatures.push(jawline.toLowerCase());
  
  const lips = getDropdownValue(elements.lips, elements.lipsOther);
  if (lips) facialFeatures.push(lips.toLowerCase());
  
  if (facialFeatures.length > 0) {
    promptParts.push(facialFeatures.join(', '));
  }
  
  // Physical features
  const physicalFeatures = [];
  const hair = getDropdownValue(elements.hair, elements.hairOther);
  if (hair) physicalFeatures.push(hair.toLowerCase());
  
  const hairColor = getDropdownValue(elements.hairColor, elements.hairColorOther);
  if (hairColor) physicalFeatures.push(hairColor.toLowerCase());
  
  const facialHair = getDropdownValue(elements.facialHair, elements.facialHairOther);
  if (facialHair) physicalFeatures.push(facialHair.toLowerCase());
  
  const accessories = getDropdownValue(elements.accessories, elements.accessoriesOther);
  if (accessories) physicalFeatures.push(accessories.toLowerCase());
  
  const clothingStyle = getDropdownValue(elements.clothingStyle, elements.clothingStyleOther);
  if (clothingStyle) physicalFeatures.push(`${clothingStyle.toLowerCase()} attire`);
  
  const bodyArt = getDropdownValue(elements.bodyArt, elements.bodyArtOther);
  if (bodyArt) physicalFeatures.push(bodyArt.toLowerCase());
  
  if (physicalFeatures.length > 0) {
    promptParts.push(physicalFeatures.join(', '));
  }
  
  // Context - prioritize context field, then environmental attributes
  let contextAdded = false;
  if (elements.context && elements.context.value.trim()) {
    promptParts.push(elements.context.value.trim());
    contextAdded = true;
  }
  
  // Environmental attributes - only add if context wasn't provided
  if (!contextAdded) {
    const environmentalElements = [];
    const indoorScenes = getDropdownValue(elements.indoorScenes, elements.indoorScenesOther);
    if (indoorScenes) environmentalElements.push(indoorScenes.toLowerCase());
    
    const outdoorScenes = getDropdownValue(elements.outdoorScenes, elements.outdoorScenesOther);
    if (outdoorScenes) environmentalElements.push(outdoorScenes.toLowerCase());
    
    const urbanSettings = getDropdownValue(elements.urbanSettings, elements.urbanSettingsOther);
    if (urbanSettings) environmentalElements.push(urbanSettings.toLowerCase());
    
    const naturalSettings = getDropdownValue(elements.naturalSettings, elements.naturalSettingsOther);
    if (naturalSettings) environmentalElements.push(naturalSettings.toLowerCase());
    
    const architectural = getDropdownValue(elements.architectural, elements.architecturalOther);
    if (architectural) environmentalElements.push(`${architectural.toLowerCase()} architecture`);
    
    if (environmentalElements.length > 0) {
      promptParts.push(`in ${environmentalElements.join(', ')}`);
    }
  }
  
  // Camera and settings
  const cameraInfo = [];
  const cameraBrand = getDropdownValue(elements.cameraBrand, elements.cameraBrandOther);
  if (cameraBrand) cameraInfo.push(cameraBrand);
  
  const cameraModel = getDropdownValue(elements.cameraModel, elements.cameraModelOther);
  if (cameraModel) cameraInfo.push(cameraModel);
  
  if (cameraInfo.length > 0) {
    promptParts.push(`shot with ${cameraInfo.join(' ')}`);
  }
  
  // Aperture
  const apertureValue = getDropdownValue(elements.apertureValue, elements.apertureValueOther);
  if (apertureValue) {
    promptParts.push(`at ${apertureValue}`);
  }
  
  // Lighting
  const lightingOption = getDropdownValue(elements.lightingOption, elements.lightingOptionOther);
  if (lightingOption) {
    promptParts.push(`${lightingOption.toLowerCase()}`);
  }
  
  // Style and mood
  const styleElements = [];
  const photoStyle = getDropdownValue(elements.photoStyle, elements.photoStyleOther);
  if (photoStyle) styleElements.push(`${photoStyle.toLowerCase()} photography`);
  
  const artisticMood = getDropdownValue(elements.artisticMood, elements.artisticMoodOther);
  if (artisticMood) styleElements.push(`${artisticMood.toLowerCase()} mood`);
  
  const colorTreatment = getDropdownValue(elements.colorTreatment, elements.colorTreatmentOther);
  if (colorTreatment) styleElements.push(colorTreatment.toLowerCase());
  
  if (styleElements.length > 0) {
    promptParts.push(styleElements.join(', '));
  }
  
  // Composition
  const compositionElements = [];
  const classicComposition = getDropdownValue(elements.classicComposition, elements.classicCompositionOther);
  if (classicComposition) compositionElements.push(classicComposition.toLowerCase());
  
  const advancedComposition = getDropdownValue(elements.advancedComposition, elements.advancedCompositionOther);
  if (advancedComposition) compositionElements.push(advancedComposition.toLowerCase());
  
  const creativeAngles = getDropdownValue(elements.creativeAngles, elements.creativeAnglesOther);
  if (creativeAngles) compositionElements.push(creativeAngles.toLowerCase());
  
  if (compositionElements.length > 0) {
    promptParts.push(`using ${compositionElements.join(', ')}`);
  }
  
  // Color Template
  const colorTemplate = getDropdownValue(elements.colorTemplate, elements.colorTemplateOther);
  if (colorTemplate) {
    promptParts.push(`color palette: ${colorTemplate.toLowerCase()}`);
  }
  
  // Film Emulation
  const filmEmulation = getDropdownValue(elements.filmEmulation, elements.filmEmulationOther);
  if (filmEmulation) {
    promptParts.push(`film emulation: ${filmEmulation}`);
  }
  
  // Additional descriptors
  if (elements.descriptors && elements.descriptors.value.trim()) {
    promptParts.push(elements.descriptors.value.trim());
  }
  
  // Quality tags
  promptParts.push('professional photography, high quality, detailed');
  
  // Technical parameters - always include these
  const technicalParams = [];
  if (elements.guidanceScale) {
    technicalParams.push(`Guidance scale: ${elements.guidanceScale.value}`);
  }
  if (elements.inferenceSteps) {
    technicalParams.push(`Inference steps: ${elements.inferenceSteps.value}`);
  }
  const resolution = getDropdownValue(elements.resolution, elements.resolutionOther);
  if (resolution) {
    technicalParams.push(`Resolution: ${resolution}`);
  }
  
  if (technicalParams.length > 0) {
    promptParts.push(technicalParams.join(', '));
  }
  
  const mainPrompt = promptParts.join(', ');
  elements.generatedPrompt.value = mainPrompt;
  
  // Generate alternative version
  const alternativePrompt = generateAlternativePrompt(promptParts);
  elements.alternativePrompt.value = alternativePrompt;
}

// Generate alternative prompt
function generateAlternativePrompt(baseParts) {
  const alternatives = [...baseParts];
  
  // Remove the last "professional photography" part for variation
  alternatives.pop();
  
  // Add some creative variations
  const creativeTags = [
    'cinematic lighting',
    'award-winning photography',
    'magazine quality',
    'artistic composition',
    'perfect exposure',
    'sharp focus',
    'studio quality',
    'masterpiece photography'
  ];
  
  // Pick a random creative tag
  const randomTag = creativeTags[Math.floor(Math.random() * creativeTags.length)];
  alternatives.push(randomTag);
  alternatives.push('ultra-detailed, photorealistic');
  
  return alternatives.join(', ');
}

// Help icon click handler
function handleHelpClick(event) {
  event.preventDefault();
  event.stopPropagation();
  
  const helpType = event.target.getAttribute('data-help');
  const helpData = appData.helpContent[helpType];
  
  if (helpData) {
    showModal(helpType, helpData);
  }
}

// Help icon hover handler
function handleHelpHover(event) {
  const helpType = event.target.getAttribute('data-help');
  const helpData = appData.helpContent[helpType];
  
  if (helpData) {
    showTooltip(event, helpData.tooltip);
  }
}

// Update tooltip position on mouse move
function updateTooltipPosition(event) {
  if (isTooltipVisible) {
    const rect = event.target.getBoundingClientRect();
    elements.tooltip.style.left = (rect.left + rect.width + 10) + 'px';
    elements.tooltip.style.top = (rect.top - 5) + 'px';
  }
}

// Show tooltip
function showTooltip(event, text) {
  if (!elements.tooltip) return;
  
  elements.tooltip.textContent = text;
  elements.tooltip.classList.remove('hidden');
  isTooltipVisible = true;
  
  const rect = event.target.getBoundingClientRect();
  elements.tooltip.style.left = (rect.left + rect.width + 10) + 'px';
  elements.tooltip.style.top = (rect.top - 5) + 'px';
}

// Hide tooltip
function hideTooltip() {
  if (elements.tooltip) {
    elements.tooltip.classList.add('hidden');
    isTooltipVisible = false;
  }
}

// Show modal
function showModal(helpType, helpData) {
  if (!elements.helpModal) return;
  
  const titles = {
    'subject': 'Subject Selection',
    'context': 'Context',
    'descriptors': 'Additional Descriptors',
    'physical_attributes': 'Physical Attributes',
    'facial_features': 'Facial Features',
    'physical_features': 'Physical Features',
    'environmental_attributes': 'Environmental Attributes',
    'camera_selection': 'Camera Selection',
    'aperture': 'Aperture Settings',
    'lighting': 'Lighting Conditions',
    'style_mood': 'Photographic Style',
    'artistic_mood': 'Artistic Mood',
    'color_treatment': 'Color Treatment',
    'composition': 'Composition Techniques',
    'advanced_composition': 'Advanced Composition',
    'creative_angles': 'Creative Angles',
    'color_template': 'Color Template',
    'film_emulation': 'Film Emulation',
    'guidance_scale': 'Guidance Scale',
    'inference_steps': 'Inference Steps',
    'resolution': 'Resolution'
  };

  elements.modalTitle.textContent = titles[helpType] || 'Help Information';
  elements.modalDescription.innerHTML = `<p><strong>Description:</strong> ${helpData.detailed}</p>`;
  
  if (helpData.use_cases) {
    const useCasesList = helpData.use_cases.map(useCase => `<li>${useCase}</li>`).join('');
    elements.modalUseCases.innerHTML = `
      <h4>Best Used For:</h4>
      <ul>${useCasesList}</ul>
    `;
  } else {
    elements.modalUseCases.innerHTML = '';
  }
  
  elements.helpModal.classList.remove('hidden');
  
  // Focus trap for accessibility
  elements.modalClose.focus();
}

// Close modal
function closeModal() {
  if (elements.helpModal) {
    elements.helpModal.classList.add('hidden');
  }
}

// Copy to clipboard
async function copyToClipboard(text, button) {
  if (!text || text.trim() === '') {
    // Visual feedback for empty content
    const originalText = button.textContent;
    button.textContent = 'Nothing to copy!';
    button.style.background = '#f44336';
    
    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = '';
    }, 2000);
    return;
  }
  
  try {
    await navigator.clipboard.writeText(text);
    
    // Visual feedback
    const originalText = button.textContent;
    const originalBg = button.style.background;
    button.textContent = 'Copied!';
    button.classList.add('copy-success');
    
    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove('copy-success');
      button.style.background = originalBg;
    }, 2000);
    
  } catch (err) {
    console.error('Failed to copy text: ', err);
    
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      
      // Visual feedback for fallback
      const originalText = button.textContent;
      button.textContent = 'Copied!';
      button.classList.add('copy-success');
      
      setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove('copy-success');
      }, 2000);
    } catch (fallbackErr) {
      console.error('Fallback copy failed: ', fallbackErr);
      
      // Final fallback - show text for manual copy
      const originalText = button.textContent;
      button.textContent = 'Copy failed';
      button.style.background = '#f44336';
      
      setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
      }, 2000);
    }
    
    document.body.removeChild(textArea);
  }
}

// Reset all form fields
function resetAll() {
  // Reset all form inputs
  const inputs = document.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    if (input.type === 'range') {
      // Reset sliders to default values
      if (input.id === 'guidance-scale') {
        input.value = '7.5';
        if (elements.guidanceScaleValue) elements.guidanceScaleValue.textContent = '7.5';
      } else if (input.id === 'inference-steps') {
        input.value = '50';
        if (elements.inferenceStepsValue) elements.inferenceStepsValue.textContent = '50';
      }
    } else {
      input.value = '';
    }
  });
  
  // Hide all other inputs
  const otherInputs = document.querySelectorAll('.other-input');
  otherInputs.forEach(input => {
    input.classList.add('hidden');
  });
  
  // Hide dependent dropdowns
  if (elements.cameraModelGroup) elements.cameraModelGroup.style.display = 'none';
  if (elements.apertureValueGroup) elements.apertureValueGroup.style.display = 'none';
  if (elements.lightingOptionGroup) elements.lightingOptionGroup.style.display = 'none';
  
  // Clear prompts
  if (elements.generatedPrompt) elements.generatedPrompt.value = '';
  if (elements.alternativePrompt) elements.alternativePrompt.value = '';
  
  // Generate fresh prompt (will be empty)
  generatePrompt();
}