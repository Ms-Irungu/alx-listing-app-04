import React from 'react';
import { Shield, CheckCircle, AlertCircle } from 'lucide-react';

const CancellationPolicy = () => {
  return (
    <div className="bg-white p-8 shadow-lg rounded-xl border border-gray-100">
      <div className="space-y-8">
        {/* Cancellation Policy */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-5 h-5 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Cancellation Policy</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-gray-700 font-medium">
                  Free cancellation before Aug 23
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Get a full refund if you cancel at least 24 hours before check-in.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-gray-700 font-medium">
                  Partial refund after Aug 23
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Cancel before check-in on Aug 24 for a 50% refund of the nightly rate.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-blue-800">
                  Travel Protection Available
                </p>
                <p className="text-sm text-blue-700 mt-1">
                  Add comprehensive travel protection for unexpected events like illness, weather, or other covered reasons.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ground Rules */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle className="w-5 h-5 text-emerald-600" />
            <h2 className="text-2xl font-bold text-gray-900">Ground Rules</h2>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2.5 flex-shrink-0"></div>
              <p className="text-gray-700">
                <span className="font-medium">Follow the house rules:</span> Respect quiet hours, smoking restrictions, and pet policies.
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2.5 flex-shrink-0"></div>
              <p className="text-gray-700">
                <span className="font-medium">Treat your host&apos;s home like your own:</span> Keep the space clean and report any issues immediately.
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2.5 flex-shrink-0"></div>
              <p className="text-gray-700">
                <span className="font-medium">Check-in and check-out times:</span> Arrive during designated hours and leave on time.
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2.5 flex-shrink-0"></div>
              <p className="text-gray-700">
                <span className="font-medium">Guest limit:</span> Only registered guests are allowed on the property.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Terms */}
        <div className="pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 leading-relaxed">
            By confirming your booking, you agree to our{' '}
            <a href="#" className="text-emerald-600 hover:text-emerald-700 underline">
              Terms of Service
            </a>
            ,{' '}
            <a href="#" className="text-emerald-600 hover:text-emerald-700 underline">
              Privacy Policy
            </a>
            , and{' '}
            <a href="#" className="text-emerald-600 hover:text-emerald-700 underline">
              Cancellation Policy
            </a>
            . You also agree to pay the total amount shown, including all applicable taxes and fees.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicy;