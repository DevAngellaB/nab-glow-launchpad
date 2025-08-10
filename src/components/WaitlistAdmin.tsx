import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface WaitlistEntry {
  email: string;
  timestamp: string;
  source: string;
}

interface CategoryInterest {
  category: string;
  timestamp: string;
}

interface ProductInterest {
  product: string;
  timestamp: string;
}

const WaitlistAdmin = () => {
  const [waitlistEmails, setWaitlistEmails] = useState<WaitlistEntry[]>([]);
  const [categoryInterests, setCategoryInterests] = useState<CategoryInterest[]>([]);
  const [productInterests, setProductInterests] = useState<ProductInterest[]>([]);

  useEffect(() => {
    // Load data from localStorage
    const emails = JSON.parse(localStorage.getItem('waitlistEmails') || '[]');
    const categories = JSON.parse(localStorage.getItem('categoryInterests') || '[]');
    const products = JSON.parse(localStorage.getItem('productInterests') || '[]');
    
    setWaitlistEmails(emails);
    setCategoryInterests(categories);
    setProductInterests(products);
  }, []);

  const downloadData = () => {
    const data = {
      waitlistEmails,
      categoryInterests,
      productInterests,
      exportedAt: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nab-glow-waitlist-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const clearData = () => {
    if (confirm('Are you sure you want to clear all data?')) {
      localStorage.removeItem('waitlistEmails');
      localStorage.removeItem('categoryInterests');
      localStorage.removeItem('productInterests');
      setWaitlistEmails([]);
      setCategoryInterests([]);
      setProductInterests([]);
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold">N.A.B Glow - Waitlist Analytics</h1>
        <div className="space-x-4">
          <Button onClick={downloadData} variant="outline">
            Download Data
          </Button>
          <Button onClick={clearData} variant="destructive">
            Clear All Data
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Waitlist Emails */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">
            Waitlist Emails ({waitlistEmails.length})
          </h2>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {waitlistEmails.length === 0 ? (
              <p className="text-gray-500">No emails collected yet</p>
            ) : (
              waitlistEmails.map((entry, index) => (
                <div key={index} className="text-sm bg-gray-50 p-2 rounded">
                  <div className="font-medium">{entry.email}</div>
                  <div className="text-gray-500">
                    {new Date(entry.timestamp).toLocaleDateString()} - {entry.source}
                  </div>
                </div>
              ))
            )}
          </div>
        </Card>

        {/* Category Interests */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">
            Category Interests ({categoryInterests.length})
          </h2>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {categoryInterests.length === 0 ? (
              <p className="text-gray-500">No category interests yet</p>
            ) : (
              categoryInterests.map((interest, index) => (
                <div key={index} className="text-sm bg-blue-50 p-2 rounded">
                  <div className="font-medium">{interest.category}</div>
                  <div className="text-gray-500">
                    {new Date(interest.timestamp).toLocaleDateString()}
                  </div>
                </div>
              ))
            )}
          </div>
        </Card>

        {/* Product Interests */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">
            Product Interests ({productInterests.length})
          </h2>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {productInterests.length === 0 ? (
              <p className="text-gray-500">No product interests yet</p>
            ) : (
              productInterests.map((interest, index) => (
                <div key={index} className="text-sm bg-green-50 p-2 rounded">
                  <div className="font-medium">{interest.product}</div>
                  <div className="text-gray-500">
                    {new Date(interest.timestamp).toLocaleDateString()}
                  </div>
                </div>
              ))
            )}
          </div>
        </Card>
      </div>

      {/* Summary Stats */}
      <Card className="mt-6 p-6">
        <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-pink-50 p-4 rounded">
            <div className="text-2xl font-bold text-pink-600">{waitlistEmails.length}</div>
            <div className="text-sm text-pink-700">Total Signups</div>
          </div>
          <div className="bg-blue-50 p-4 rounded">
            <div className="text-2xl font-bold text-blue-600">{categoryInterests.length}</div>
            <div className="text-sm text-blue-700">Category Interests</div>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <div className="text-2xl font-bold text-green-600">{productInterests.length}</div>
            <div className="text-sm text-green-700">Product Interests</div>
          </div>
          <div className="bg-purple-50 p-4 rounded">
            <div className="text-2xl font-bold text-purple-600">
              {((waitlistEmails.length + categoryInterests.length + productInterests.length) / 3).toFixed(1)}
            </div>
            <div className="text-sm text-purple-700">Avg. Engagement</div>
          </div>
        </div>
      </Card>

      <Card className="mt-6 p-6">
        <h2 className="text-xl font-semibold mb-4">Implementation Notes</h2>
        <div className="text-sm text-gray-600 space-y-2">
          <p><strong>Current Setup:</strong> Data is stored locally in browser storage and submitted to Netlify Forms.</p>
          <p><strong>Netlify Forms:</strong> Check your Netlify dashboard under "Forms" tab to see submissions.</p>
          <p><strong>Email Integration:</strong> Consider connecting to services like Mailchimp, ConvertKit, or EmailOctopus.</p>
          <p><strong>Analytics:</strong> This admin panel shows local storage data for development purposes.</p>
        </div>
      </Card>
    </div>
  );
};

export default WaitlistAdmin;
