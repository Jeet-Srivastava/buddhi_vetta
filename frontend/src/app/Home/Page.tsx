"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [formData, setFormData] = useState({
    vehicle_name: '',
    model: '',
    machine_age: '',
    total_kilometers: '',
    Air_temperature: '',
    Process_temperature: '',
    Rotational_speed: '',
    Torque: '',
    Tool_wear: '',
    machine_type: 'M'
  });

  const [isLoading, setIsLoading] = useState(false);
  const [predictionResult, setPredictionResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handlePredict = async () => {
    setIsLoading(true);
    setError(null);
    setPredictionResult(null);

    try {
      const payload = {
        vehicle_name: formData.vehicle_name || "Unknown",
        model: formData.model || "Unknown",
        machine_age: parseFloat(formData.machine_age) || 0,
        total_kilometers: parseFloat(formData.total_kilometers) || 0,
        Air_temperature: parseFloat(formData.Air_temperature) || 0,
        Process_temperature: parseFloat(formData.Process_temperature) || 0,
        Rotational_speed: parseFloat(formData.Rotational_speed) || 0,
        Torque: parseFloat(formData.Torque) || 0,
        Tool_wear: parseFloat(formData.Tool_wear) || 0,
        Type_L: formData.machine_type === 'L',
        Type_M: formData.machine_type === 'M'
      };

      const response = await fetch('https://buddhi-vetta.onrender.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Prediction request failed');
      }

      const data = await response.json();
      setPredictionResult(data);
    } catch (err: any) {
      setError(err.message || 'An error occurred during prediction');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans scroll-smooth">
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-white text-black flex items-center justify-center font-bold text-xs rounded-sm">
              BV
            </div>
            <span className="text-lg font-semibold tracking-tight">Buddhi Vetta</span>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="#about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors px-4 py-2">
              Platform
            </Link>
            <Link href="#predict" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors px-4 py-2">
              Data Input
            </Link>
            <Link href="#explore" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors px-4 py-2">
              Insights
            </Link>
            <div className="h-4 w-px bg-zinc-800 mx-2"></div>
            <Link href="/login" className="text-sm font-medium text-zinc-300 hover:text-white px-4 py-2">
              Log in
            </Link>
            <Link href="/signup" className="text-sm font-medium bg-white text-black px-4 py-2 rounded-md hover:bg-zinc-200 transition-colors">
              Sign up
            </Link>
          </div>
        </div>
      </nav>

      <section id="about" className="min-h-screen flex items-center pt-20 border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs font-medium text-zinc-300 w-fit">
              <span className="flex h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></span>
              Predictive Maintenance Engine v2.0
            </div>

            <h1 className="text-5xl lg:text-6xl font-semibold leading-[1.15] tracking-tight">
              Intelligent fleet <br />
              <span className="text-zinc-500">maintenance prediction.</span>
            </h1>

            <p className="text-zinc-400 text-lg max-w-lg leading-relaxed mt-2 font-light">
              Streamline your vehicle operations. Our machine learning models predict failures before they happen, minimizing downtime and optimizing maintenance schedules.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <Link href="#predict" className="px-6 py-3 rounded-md bg-white text-black font-medium hover:bg-zinc-200 transition-colors text-sm">
                Start Predicting
              </Link>
            </div>
          </div>

          <div className="relative w-full aspect-[4/3] bg-zinc-900/20 rounded-2xl border border-zinc-800/50 flex flex-col items-center justify-center p-8 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px]"></div>
            <svg className="relative z-10 text-zinc-700 mb-4" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2" /><rect width="6" height="6" x="9" y="9" rx="1" /><path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" /></svg>
            <p className="relative z-10 text-zinc-600 text-xs font-medium tracking-widest">SYSTEM OVERVIEW</p>
          </div>
        </div>
      </section>

      <section id="predict" className="min-h-screen flex items-center py-20 border-b border-zinc-800/50 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-center">Data Input</h2>
          <p className="text-zinc-400 text-center max-w-2xl mb-16 font-light">
            Choose how you want to analyze your fleet data. Upload bulk historical records or enter current sensor readings manually.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
            <div className="lg:col-span-4 bg-zinc-900/30 border border-zinc-800 rounded-xl p-8 hover:border-zinc-700 transition-colors flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-zinc-800/50 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-300"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Upload CSV</h3>
              <p className="text-zinc-400 text-sm font-light mb-8 max-w-xs">
                Upload your datasets for bulk predictions. Supported format: .csv
              </p>
              <div className="w-full border-2 border-dashed border-zinc-700 rounded-lg p-8 flex flex-col items-center justify-center bg-zinc-950/50 hover:bg-zinc-900/80 transition-colors cursor-pointer">
                <span className="text-sm text-zinc-400 mb-4">Drag and drop file here</span>
                <button className="px-6 py-2 rounded-md bg-zinc-800 text-white text-sm font-medium hover:bg-zinc-700 transition-colors">
                  Browse Files
                </button>
              </div>
            </div>

            <div className="lg:col-span-8 bg-zinc-900/30 border border-zinc-800 rounded-xl p-8 hover:border-zinc-700 transition-colors flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-zinc-800/50 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-300"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium">Manual Entry</h3>
                  <p className="text-zinc-400 text-sm font-light">Input real-time sensor data parameters</p>
                </div>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">

                <div className="flex flex-col gap-2">
                  <label htmlFor="vehicle_name" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Vehicle Name</label>
                  <input id="vehicle_name" value={formData.vehicle_name} onChange={handleInputChange} type="text" placeholder="e.g. Truck-01" className="bg-zinc-950 border border-zinc-800 rounded-md p-3 text-sm text-zinc-200 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="model" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Vehicle Model</label>
                  <input id="model" value={formData.model} onChange={handleInputChange} type="text" placeholder="e.g. Volvo FH16" className="bg-zinc-950 border border-zinc-800 rounded-md p-3 text-sm text-zinc-200 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="machine_type" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Machine Type</label>
                  <select id="machine_type" value={formData.machine_type} onChange={handleInputChange} className="bg-zinc-950 border border-zinc-800 rounded-md p-3 text-sm text-zinc-200 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all">
                    <option value="L">Type L (Low)</option>
                    <option value="M">Type M (Medium)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="machine_age" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Machine Age (Yrs)</label>
                  <input id="machine_age" value={formData.machine_age} onChange={handleInputChange} type="number" placeholder="e.g. 5.5" className="bg-zinc-950 border border-zinc-800 rounded-md p-3 text-sm text-zinc-200 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="total_kilometers" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Total Kilometers</label>
                  <input id="total_kilometers" value={formData.total_kilometers} onChange={handleInputChange} type="number" placeholder="e.g. 150000" className="bg-zinc-950 border border-zinc-800 rounded-md p-3 text-sm text-zinc-200 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="Air_temperature" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Air Temperature (K)</label>
                  <input id="Air_temperature" value={formData.Air_temperature} onChange={handleInputChange} type="number" step="0.1" placeholder="e.g. 298.1" className="bg-zinc-950 border border-zinc-800 rounded-md p-3 text-sm text-zinc-200 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="Process_temperature" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Process Temp (K)</label>
                  <input id="Process_temperature" value={formData.Process_temperature} onChange={handleInputChange} type="number" step="0.1" placeholder="e.g. 308.6" className="bg-zinc-950 border border-zinc-800 rounded-md p-3 text-sm text-zinc-200 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="Rotational_speed" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Rotational Speed (RPM)</label>
                  <input id="Rotational_speed" value={formData.Rotational_speed} onChange={handleInputChange} type="number" placeholder="e.g. 1551" className="bg-zinc-950 border border-zinc-800 rounded-md p-3 text-sm text-zinc-200 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="Torque" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Torque (Nm)</label>
                  <input id="Torque" value={formData.Torque} onChange={handleInputChange} type="number" step="0.1" placeholder="e.g. 42.8" className="bg-zinc-950 border border-zinc-800 rounded-md p-3 text-sm text-zinc-200 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="Tool_wear" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Tool Wear (min)</label>
                  <input id="Tool_wear" value={formData.Tool_wear} onChange={handleInputChange} type="number" placeholder="e.g. 120" className="bg-zinc-950 border border-zinc-800 rounded-md p-3 text-sm text-zinc-200 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" />
                </div>

                <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-4">
                  <button
                    type="button"
                    onClick={handlePredict}
                    disabled={isLoading}
                    className="w-full px-6 py-3 rounded-md bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Processing...' : 'Run Prediction'}
                  </button>
                </div>

                {error && (
                  <div className="col-span-1 md:col-span-2 lg:col-span-3 p-4 bg-red-900/30 border border-red-800 rounded-md text-red-400 text-sm">
                    {error}
                  </div>
                )}
              </form>
            </div>
          </div>

          {predictionResult && (
            <div className="w-full max-w-4xl mt-16 p-10 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center">

              <div className={`mb-6 inline-flex items-center justify-center p-5 rounded-full ${predictionResult.prediction?.failure === 1 ? 'bg-red-500/10 text-red-500 shadow-[0_0_30px_rgba(239,68,68,0.2)]' : 'bg-green-500/10 text-green-500 shadow-[0_0_30px_rgba(34,197,94,0.2)]'}`}>
                {predictionResult.prediction?.failure === 1 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                )}
              </div>

              <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white">
                {predictionResult.prediction?.failure === 1 ? 'Maintenance Required' : 'System Healthy'}
              </h3>

              <p className="text-zinc-400 text-lg mb-10 max-w-xl">
                {predictionResult.prediction?.failure === 1
                  ? "Our model has detected a high probability of machine failure. Please review the specific risks and AI diagnostic report below."
                  : "All operational parameters are within normal thresholds. There are no immediate risks detected for this machine."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mb-12">
                <div className="bg-zinc-950/50 border border-zinc-800/80 rounded-xl p-8 flex flex-col items-center justify-center transition-all hover:bg-zinc-900/60">
                  <span className="text-zinc-500 text-sm uppercase tracking-widest font-semibold mb-3">Overall Failure Risk</span>
                  <span className={`text-5xl font-light ${predictionResult.prediction?.failure === 1 ? 'text-red-400' : 'text-green-400'}`}>
                    {((predictionResult.prediction?.failure_probability || 0) * 100).toFixed(1)}%
                  </span>
                </div>

                {predictionResult.prediction?.failure === 1 && predictionResult.prediction?.failure_types && Object.keys(predictionResult.prediction.failure_types).length > 0 ? (
                  Object.entries(predictionResult.prediction.failure_types).map(([type, prob]) => (
                    <div key={type} className="bg-red-950/20 border border-red-900/30 rounded-xl p-8 flex flex-col items-center justify-center relative overflow-hidden transition-all hover:bg-red-900/20 shadow-[inset_0_0_20px_rgba(239,68,68,0.05)]">
                      <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50"></div>
                      <span className="text-red-500 text-sm text-center uppercase tracking-widest font-bold mb-3">{
                        type === 'TWF' ? 'Tool Wear' :
                          type === 'HDF' ? 'Heat Dissipation' :
                            type === 'PWF' ? 'Power' :
                              type === 'OSF' ? 'Overstrain' : type
                      } RISK</span>
                      <span className="text-5xl font-light text-white">
                        {((prob as number) * 100).toFixed(1)}%
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="bg-zinc-950/50 border border-zinc-800/80 rounded-xl p-8 flex flex-col items-center justify-center sm:col-span-2 text-center transition-all hover:bg-zinc-900/60">
                    <span className="text-zinc-500 text-sm uppercase tracking-widest font-semibold mb-3">Primary Failure Mode</span>
                    <span className="text-2xl text-zinc-300 font-light">None Detected</span>
                  </div>
                )}
              </div>

              <div className="w-full text-left bg-zinc-950 border border-zinc-800/80 rounded-xl overflow-hidden shadow-lg">
                <div className="bg-zinc-900/80 border-b border-zinc-800/80 px-8 py-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></svg>
                    <h4 className="font-semibold text-white tracking-wide">AI Diagnostic Report</h4>
                  </div>
                  <span className="text-xs font-medium tracking-wider text-blue-400/80 bg-blue-950/40 px-3 py-1.5 rounded-full border border-blue-900/50">GROQ LLM ANALYSIS</span>
                </div>
                <div className="p-8 font-mono text-[15px] text-zinc-300 whitespace-pre-wrap leading-relaxed">
                  {predictionResult.report}
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      <section id="explore" className="min-h-[80vh] flex flex-col items-center justify-center py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.05),transparent_50%)]"></div>
        <div className="relative z-10 text-center max-w-2xl px-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Actionable Insights</h2>
          <p className="text-zinc-400 font-light mb-10 text-lg">
            Visualize your prediction history, track asset health across your entire fleet, and generate comprehensive maintenance reports.
          </p>
          <Link href="/Dashboard" className="px-8 py-3 rounded-md bg-white text-black font-medium hover:bg-zinc-200 transition-colors text-sm">
            View Dashboard
          </Link>
        </div>
      </section>

      <footer className="py-8 border-t border-zinc-800/50 text-center text-zinc-600 text-sm font-light">
        <p>© 2026 Buddhi Vetta. All rights reserved.</p>
      </footer>
    </div>
  );
}
