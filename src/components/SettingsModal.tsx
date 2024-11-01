import React, { useState } from 'react';
import { X, Github, Trello, Mail, Eye, EyeOff } from 'lucide-react';
import { ConfigData } from '../types/api';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: ConfigData;
  onSave: (newConfig: ConfigData) => void;
}

export function SettingsModal({ isOpen, onClose, config, onSave }: SettingsModalProps) {
  const [showTokens, setShowTokens] = useState(false);
  const [formData, setFormData] = useState(config);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleChange = (section: keyof ConfigData, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-6 m-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Dashboard Settings</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="text-gray-600" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Github className="text-gray-700" />
                <h3 className="text-lg font-medium text-gray-800">GitHub Configuration</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Personal Access Token
                  </label>
                  <div className="relative">
                    <input
                      type={showTokens ? "text" : "password"}
                      value={formData.github.token}
                      onChange={(e) => handleChange('github', 'token', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => setShowTokens(!showTokens)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showTokens ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Trello className="text-gray-700" />
                <h3 className="text-lg font-medium text-gray-800">Jira Configuration</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    API Token
                  </label>
                  <div className="relative">
                    <input
                      type={showTokens ? "text" : "password"}
                      value={formData.jira.token}
                      onChange={(e) => handleChange('jira', 'token', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Mail className="text-gray-700" />
                <h3 className="text-lg font-medium text-gray-800">Email Configuration</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Refresh Token
                  </label>
                  <div className="relative">
                    <input
                      type={showTokens ? "text" : "password"}
                      value={formData.email.refreshToken}
                      onChange={(e) => handleChange('email', 'refreshToken', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}