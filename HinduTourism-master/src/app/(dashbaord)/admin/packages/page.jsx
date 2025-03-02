"use client"
import React, { useState, useEffect } from "react";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Fields/InputFields";
import TextArea from "@/components/atoms/Fields/TextArea";
import { FiEdit, FiPlus, FiTrash } from "react-icons/fi";
import { FormContainer } from "@/components/organisms/Forms";
import { fetchAPI } from "@/utils/apiService";

const PackageManager = () => {
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isPackageOpen, setIsPackageOpen] = useState(false);

  useEffect(() => {
    const loadPackages = async () => {
      try {
        const packagesData = await fetchAPI("travelPackages");
        if (packagesData) setPackages(packagesData.data);
      } catch (error) {
        console.error("Failed to load packages:", error);
      }
    };
    loadPackages();
  }, []);

  const handlePackageSubmit = async (e) => {
    e.preventDefault();
    try {
      const packageData = {
        ...selectedPackage,
        itinerary: [] 
      };

      const method = selectedPackage?._id ? "PUT" : "POST";
      const endpoint = selectedPackage?._id 
        ? `travelPackages/${selectedPackage._id}`
        : "travelPackages";

      const savedData = await fetchAPI(endpoint, method, packageData);

      if (savedData) {
        setPackages(prev => 
          selectedPackage?._id
            ? prev.map(p => p._id === savedData._id ? savedData : p)
            : [savedData, ...prev]
        );
        setIsPackageOpen(false);
        setSelectedPackage(null);
      }
    } catch (error) {
      alert("Package submission failed: " + error.message);
    }
  };

  const handlePackageDelete = async (packageId) => {
    if (window.confirm("Are you sure you want to delete this package?")) {
      try {
        await fetchAPI(`travelPackages/${packageId}`, "DELETE");
        setPackages(prev => prev.filter(p => p._id !== packageId));
      } catch (error) {
        alert("Failed to delete package: " + error.message);
      }
    }
  };
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Manage Packages</h2>
        <Button
          text="Add Package"
          onClick={() => {
            setSelectedPackage({
              name: "",
              description: "",
              price: 0,
              includes: [],
              excludes: []
            });
            setIsPackageOpen(true);
          }}
          icon={<FiPlus className="mr-2" />}
        />
      </div>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Name</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Price</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {packages.map((pkg) => (
              <tr key={pkg._id} className="hover:bg-gray-50">
                <td className="px-4 py-4 font-medium text-gray-900">{pkg.name}</td>
                <td className="px-4 py-4">₹{pkg.price}</td>
                <td className="px-4 py-4 flex items-center gap-2">
                  <button
                    onClick={() => {
                      setSelectedPackage(pkg);
                      setIsPackageOpen(true);
                    }}
                    className="text-blue-600 hover:text-blue-800 p-2 rounded-lg hover:bg-blue-50"
                  >
                    <FiEdit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handlePackageDelete(pkg._id)}
                    className="text-red-600 hover:text-red-800 p-2 rounded-lg hover:bg-red-50"
                  >
                    <FiTrash className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isPackageOpen && (
        <div className="fixed inset-0 bg-black/30 z-50 overflow-y-auto p-4">
          <div className="w-full max-w-3xl mx-auto">
            <FormContainer
              title={selectedPackage?._id 
                ? `Editing: ${selectedPackage.name}` 
                : "Create New Package"}
              onClose={() => setIsPackageOpen(false)}
            >
              <div className="space-y-6">
                <Input
                  label="Package Name"
                  value={selectedPackage?.name || ""}
                  onChange={(e) => setSelectedPackage(prev => ({
                    ...prev,
                    name: e.target.value
                  }))}
                  placeholder="Enter package name"
                  required
                />

                <Input
                  label="Price"
                  type="number"
                  value={selectedPackage?.price || ""}
                  onChange={(e) => setSelectedPackage(prev => ({
                    ...prev,
                    price: Number(e.target.value)
                  }))}
                  placeholder="Enter package price"
                  required
                />

                <TextArea
                  label="Description"
                  value={selectedPackage?.description || ""}
                  onChange={(e) => setSelectedPackage(prev => ({
                    ...prev,
                    description: e.target.value
                  }))}
                  rows={3}
                  placeholder="Package description"
                />

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">Includes</h3>
                      <Button
                        text="Add Inclusion"
                        onClick={() => setSelectedPackage(prev => ({
                          ...prev,
                          includes: [...prev.includes, ""]
                        }))}
                        size="small"
                        variant="outline"
                      />
                    </div>
                    {selectedPackage?.includes?.map((item, index) => (
                      <div key={index} className="flex gap-2 items-center">
                        <Input
                          value={item}
                          onChange={(e) => {
                            const newIncludes = [...selectedPackage.includes];
                            newIncludes[index] = e.target.value;
                            setSelectedPackage(prev => ({
                              ...prev,
                              includes: newIncludes
                            }));
                          }}
                        />
                        <button
                          onClick={() => {
                            const newIncludes = selectedPackage.includes.filter((_, i) => i !== index);
                            setSelectedPackage(prev => ({
                              ...prev,
                              includes: newIncludes
                            }));
                          }}
                          className="text-red-500 hover:text-red-700"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">Excludes</h3>
                      <Button
                        text="Add Exclusion"
                        onClick={() => setSelectedPackage(prev => ({
                          ...prev,
                          excludes: [...prev.excludes, ""]
                        }))}
                        size="small"
                        variant="outline"
                      />
                    </div>
                    {selectedPackage?.excludes?.map((item, index) => (
                      <div key={index} className="flex gap-2 items-center">
                        <Input
                          value={item}
                          onChange={(e) => {
                            const newExcludes = [...selectedPackage.excludes];
                            newExcludes[index] = e.target.value;
                            setSelectedPackage(prev => ({
                              ...prev,
                              excludes: newExcludes
                            }));
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 justify-end mt-6 pt-4 border-t">
                  <Button
                    text="Cancel"
                    onClick={() => setIsPackageOpen(false)}
                    color="orangeborder"
                    variant="default"
                  />
                  <Button
                    text={selectedPackage?._id ? "Save Changes" : "Create Package"}
                    onClick={handlePackageSubmit}
                    color="orange-light"
                    variant="default"
                  />
                </div>
              </div>
            </FormContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageManager;