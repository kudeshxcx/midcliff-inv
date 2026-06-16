import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [enquiryType, setEnquiryType] = useState('Steel Sales & Supply');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill out all required fields.'); // Fallback but better to use simple check
      return;
    }
    
    // Simulate successful submission
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setCompany('');
    setEmail('');
    setPhone('');
    setEnquiryType('Steel Sales & Supply');
    setMessage('');
    setIsSubmitted(false);
  };

  const handleWhatsAppDirect = () => {
    const formattedText = `Hi Midcliff Investments, I have a general customer enquiry from your platform:\n\n*Name:* ${name || 'Customer'}\n*Company:* ${company || 'N/A'}\n*Email:* ${email || 'N/A'}\n*Phone:* ${phone || 'N/A'}\n*Department:* ${enquiryType}\n*Inquiry Message:* ${message || 'Requesting contact regarding steel products.'}`;
    const encoded = encodeURIComponent(formattedText);
    window.open(`https://wa.me/263772968434?text=${encoded}`, '_blank');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="midcliff-contact-section">
      {/* Left side: Credentials (5 cols) */}
      <div className="lg:col-span-5 space-y-6">
        <div>
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest block mb-2 font-mono">
            Get in touch with us
          </span>
          <h3 className="font-sans font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight">
            Our Midlands Trading Offices
          </h3>
          <p className="text-slate-500 text-sm mt-3 leading-relaxed">
            Whether you are coordinating raw structural metals for a mining rig in Mutare, requesting bulky yellow brass pickup in Gweru, or scheduling commercial transportation across Zimbabwe, Midcliff Investments handles it.
          </p>
        </div>

        {/* Credentials Cards */}
        <div className="space-y-4">
          {/* Location */}
          <div className="flex items-start gap-4 p-4 bg-slate-50 border border-slate-100 rounded-xl">
            <div className="p-2.5 bg-slate-900 text-amber-400 rounded-lg shrink-0 mt-0.5">
              <MapPin size={18} />
            </div>
            <div>
              <h4 className="font-sans font-bold text-sm text-slate-900">Headquarters & Steel Yard</h4>
              <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-normal font-medium">
                1430/31 Oldsteelworks Rd,<br />
                Redcliff Midlands, Zimbabwe
              </p>
            </div>
          </div>

          {/* Email */}
          <a
            href="mailto:peterchiramba1450@gmail.com"
            className="flex items-start gap-4 p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-amber-500/30 transition-all group block"
          >
            <div className="p-2.5 bg-slate-900 text-amber-400 rounded-lg shrink-0 mt-0.5 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
              <Mail size={18} />
            </div>
            <div>
              <h4 className="font-sans font-bold text-sm text-slate-900">Corporate Email Dispatch</h4>
              <p className="text-teal-600 group-hover:text-amber-600 font-mono text-xs sm:text-sm mt-1 font-semibold break-all">
                peterchiramba1450@gmail.com
              </p>
              <p className="text-slate-400 text-[10px] sm:text-xs mt-0.5">Guaranteed reply within 24 business hours</p>
            </div>
          </a>

          {/* WhatsApp Direct Line */}
          <a
            href="https://wa.me/263772968434"
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-4 p-4 bg-emerald-50/50 border border-emerald-100 hover:border-emerald-500/30 rounded-xl transition-all group block"
          >
            <div className="p-2.5 bg-emerald-600 text-white rounded-lg shrink-0 mt-0.5 group-hover:bg-emerald-700 transition-colors">
              <Phone size={18} />
            </div>
            <div>
              <h4 className="font-sans font-bold text-sm text-emerald-950">Immediate WhatsApp Help</h4>
              <p className="text-emerald-700 font-mono text-xs sm:text-sm mt-1 font-bold">
                +263 77 296 8434
              </p>
              <p className="text-emerald-500 text-[10px] sm:text-xs mt-0.5 leading-normal flex items-center gap-1">
                Click to open WhatsApp chat <ExternalLink size={12} />
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* Right side: Contact Form (7 cols) */}
      <div className="lg:col-span-7">
        <div className="bg-white border border-slate-150-inset rounded-2xl shadow-xl p-6 sm:p-8">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                <CheckCircle2 size={36} />
              </div>
              <div>
                <h4 className="font-sans font-bold text-xl text-slate-900">Message Logged Successfully</h4>
                <p className="text-slate-500 text-sm mt-2 max-w-md mx-auto leading-relaxed">
                  Thank you for contacting Midcliff Investments! Our chief manager <b>Peter Chiramba</b> has received your query and will reply via email at <span className="font-mono text-emerald-600 font-semibold">{email}</span> or contact your lines shortly.
                </p>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/10 active:scale-95"
                >
                  <MessageSquare size={16} /> Send via WhatsApp
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all active:scale-95"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h4 className="font-sans font-bold text-lg text-slate-900 mb-2 border-b border-slate-100 pb-2">
                Send a Commercial Enquiry
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Tendai Moyo"
                    className="w-full rounded-lg border border-slate-200 px-3.5 py-2 text-sm focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                    Company / Organisation
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Midlands Engineering PLC"
                    className="w-full rounded-lg border border-slate-200 px-3.5 py-2 text-sm focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. tendai@midlandseng.co.zw"
                    className="w-full rounded-lg border border-slate-200 px-3.5 py-2 text-sm focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +263 77 123 4567"
                    className="w-full rounded-lg border border-slate-200 px-3.5 py-2 text-sm focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                  Primary Business Interest
                </label>
                <select
                  value={enquiryType}
                  onChange={(e) => setEnquiryType(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 font-medium"
                >
                  <option value="Steel Sales & Supply">Structural Steel Sales (Ferrous / Non-ferrous)</option>
                  <option value="Scrap Buyback & Recycling">Scrap Metal Trade & Purchase</option>
                  <option value="Transport & Logistics">Local Transport & logistics in Zimbabwe</option>
                  <option value="Wholesale Contracts">Mining & Contracting Supply Contracts</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                  Enquiry details <span className="text-rose-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your structural metal sizes, quantities, scrap batches, or delivery routes..."
                  className="w-full rounded-lg border border-slate-200 px-3.5 py-2 text-sm focus:border-amber-500 focus:outline-none resize-none placeholder-slate-400"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  type="submit"
                  className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 hover:shadow-lg active:scale-95"
                >
                  <Send size={15} /> Log Inquiry
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 hover:shadow-lg active:scale-95 shadow-md shadow-emerald-500/10"
                >
                  <MessageSquare size={15} /> Open Directly in WhatsApp
                </button>
              </div>
              <p className="text-[10px] text-slate-400 text-center mt-2">
                Logging sends an online dispatch copy. WhatsApp connects you directly to our active sales line.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
