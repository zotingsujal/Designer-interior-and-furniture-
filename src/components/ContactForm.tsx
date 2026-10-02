import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, PhoneCall } from 'lucide-react';
import { Button } from './Button';

interface ContactFormProps {
  initialProjectType?: string;
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialProjectType = 'Custom Furniture',
  onSuccess,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    projectType: initialProjectType,
    location: '',
    requirementSummary: '',
    budget: '',
    preferredContactMethod: 'WhatsApp',
    projectDetails: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const projectTypes = [
    'Custom Furniture',
    'Sofa / Sofa-cum-Bed',
    'Bedroom Furniture',
    'Living Room Furniture',
    'Dining Furniture',
    'Complete Home Interior',
    'Office Interior',
    'Renovation',
    'Other',
  ];

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name.';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your phone number.';
    } else if (!/^[0-9+()-\s]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (!formData.location.trim()) newErrors.location = 'Please share your Mumbai area or location.';
    if (!formData.projectDetails.trim()) newErrors.projectDetails = 'Please share a brief note on your requirements.';
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const rest = { ...prev };
        delete rest[name];
        return rest;
      });
    }
  };

  const constructWhatsAppMessage = () => {
    return `*New Consultation Request - Designer Furniture & Interior*%0A%0A*Name:* ${encodeURIComponent(
      formData.name
    )}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*WhatsApp:* ${encodeURIComponent(
      formData.whatsapp || formData.phone
    )}%0A*Project Type:* ${encodeURIComponent(formData.projectType)}%0A*Location:* ${encodeURIComponent(
      formData.location
    )}%0A*Looking For:* ${encodeURIComponent(
      formData.requirementSummary || 'Custom Interior / Furniture'
    )}%0A*Budget Range:* ${encodeURIComponent(formData.budget || 'To be discussed')}%0A*Preferred Contact:* ${encodeURIComponent(
      formData.preferredContactMethod
    )}%0A*Project Details:* ${encodeURIComponent(formData.projectDetails)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSubmitted(true);
    if (onSuccess) onSuccess();
  };

  const handleOpenWhatsAppDirect = () => {
    const message = constructWhatsAppMessage();
    window.open(`https://wa.me/919821432122?text=${message}`, '_blank');
  };

  // Harmonious input field styling without jarring stark white patches
  const inputClass = (hasError: boolean) =>
    `w-full bg-[#F6F2EC] border px-3.5 py-2.5 text-sm text-[#18181B] placeholder-[#8A8279] focus:outline-hidden focus:border-[#18181B] focus:bg-[#FAF9F5] transition-colors rounded-xs ${
      hasError ? 'border-red-600' : 'border-[#D9D1C5]'
    }`;

  if (submitted) {
    return (
      <div className="bg-[#FAF9F5] border border-[#D9D1C5] p-8 sm:p-12 text-center rounded-xs shadow-xs">
        <CheckCircle2 className="w-12 h-12 text-[#1F5435] mx-auto mb-4" />
        <h3 className="font-serif text-2xl sm:text-3xl text-[#18181B] font-normal mb-3">
          Thank You, {formData.name}
        </h3>
        <p className="text-sm text-[#5C554E] max-w-lg mx-auto leading-relaxed mb-6">
          Your consultation request has been recorded. For the fastest response, you can immediately send these exact details to our team on WhatsApp or expect a callback from us.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            variant="whatsapp"
            size="md"
            onClick={handleOpenWhatsAppDirect}
            className="w-full sm:w-auto"
          >
            <MessageSquare className="w-4 h-4 mr-1" />
            Send to Team on WhatsApp
          </Button>
          <Button
            variant="outline"
            size="md"
            onClick={() => setSubmitted(false)}
            className="w-full sm:w-auto"
          >
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#FAF9F5] border border-[#E6DFD5] p-6 sm:p-10 shadow-xs"
      noValidate
    >
      <div className="mb-8">
        <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#87786B] mb-2">
          Consultation Request
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl text-[#18181B] font-normal">
          Tell Us About Your Requirement
        </h3>
        <p className="text-xs sm:text-sm text-[#5C554E] mt-2">
          Share your space dimensions, furniture needs, or ideas. We respect your privacy.
        </p>
      </div>

      <div className="space-y-5">
        {/* Row 1: Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#38332E] mb-1.5">
              Full Name <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              className={inputClass(!!errors.name)}
            />
            {errors.name && <p className="text-xs text-red-700 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#38332E] mb-1.5">
              Phone Number <span className="text-red-700">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="098214 32122"
              className={inputClass(!!errors.phone)}
            />
            {errors.phone && <p className="text-xs text-red-700 mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* Row 2: WhatsApp & Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#38332E] mb-1.5">
              WhatsApp Number <span className="text-[#87786B] font-normal lowercase">(if different)</span>
            </label>
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="e.g. 9821432122"
              className={inputClass(false)}
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#38332E] mb-1.5">
              Location / Area in Mumbai <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Santacruz West, Bandra, Juhu, Andheri"
              className={inputClass(!!errors.location)}
            />
            {errors.location && <p className="text-xs text-red-700 mt-1">{errors.location}</p>}
          </div>
        </div>

        {/* Row 3: Project Type & Approximate Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#38332E] mb-1.5">
              Project Type <span className="text-red-700">*</span>
            </label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className={`${inputClass(false)} cursor-pointer`}
            >
              {projectTypes.map((pt) => (
                <option key={pt} value={pt}>
                  {pt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#38332E] mb-1.5">
              Approximate Budget <span className="text-[#87786B] font-normal lowercase">(optional)</span>
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className={`${inputClass(false)} cursor-pointer`}
            >
              <option value="">Select range</option>
              <option value="Under ₹1 Lakh (Individual Piece)">Under ₹1 Lakh (Individual Piece)</option>
              <option value="₹1 Lakh – ₹3 Lakhs">₹1 Lakh – ₹3 Lakhs</option>
              <option value="₹3 Lakhs – ₹7 Lakhs">₹3 Lakhs – ₹7 Lakhs</option>
              <option value="₹7 Lakhs – ₹15 Lakhs">₹7 Lakhs – ₹15 Lakhs</option>
              <option value="₹15 Lakhs+ (Complete Turnkey)">₹15 Lakhs+ (Complete Turnkey)</option>
              <option value="To Discuss Based on Designs">To Discuss Based on Designs</option>
            </select>
          </div>
        </div>

        {/* Row 4: What are you looking for */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#38332E] mb-1.5">
            What are you looking for?
          </label>
          <input
            type="text"
            name="requirementSummary"
            value={formData.requirementSummary}
            onChange={handleChange}
            placeholder="e.g. 7-seater sectional sofa with storage ottoman, or master bedroom wardrobe"
            className={inputClass(false)}
          />
        </div>

        {/* Row 5: Preferred Contact Method */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#38332E] mb-1.5">
            Preferred Contact Method
          </label>
          <div className="flex items-center gap-6 mt-1">
            <label className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#38332E] cursor-pointer">
              <input
                type="radio"
                name="preferredContactMethod"
                value="WhatsApp"
                checked={formData.preferredContactMethod === 'WhatsApp'}
                onChange={handleChange}
                className="accent-[#18181B]"
              />
              <span className="flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#1F5435]" /> WhatsApp Message
              </span>
            </label>
            <label className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#38332E] cursor-pointer">
              <input
                type="radio"
                name="preferredContactMethod"
                value="Phone Call"
                checked={formData.preferredContactMethod === 'Phone Call'}
                onChange={handleChange}
                className="accent-[#18181B]"
              />
              <span className="flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-[#87786B]" /> Phone Call
              </span>
            </label>
          </div>
        </div>

        {/* Row 6: Project Details */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#38332E] mb-1.5">
            Project Details &amp; Specific Requirements <span className="text-red-700">*</span>
          </label>
          <textarea
            name="projectDetails"
            rows={4}
            value={formData.projectDetails}
            onChange={handleChange}
            placeholder="Describe your room layout, preferred materials (teak wood, veneer, fabric type), reference styles, or specific dimensions..."
            className={`${inputClass(!!errors.projectDetails)} resize-y`}
          />
          {errors.projectDetails && (
            <p className="text-xs text-red-700 mt-1">{errors.projectDetails}</p>
          )}
        </div>

        {/* Submit Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
            <Send className="w-4 h-4 mr-2" />
            Request a Consultation
          </Button>

          <Button
            type="button"
            variant="whatsapp"
            size="lg"
            onClick={handleOpenWhatsAppDirect}
            className="w-full sm:w-auto"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Send via WhatsApp Directly
          </Button>
        </div>
      </div>
    </form>
  );
};
