"use client"
import React, { useState, useEffect } from "react";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Fields/InputFields";
import TextArea from "@/components/atoms/Fields/TextArea";
import { FiEdit, FiX, FiPlus, FiImage, FiTrash } from "react-icons/fi";
import { FormContainer } from "@/components/organisms/Forms";
import { fetchAPI } from "@/utils/apiService";

const TempleManager = () => {
  const [temples, setTemples] = useState({ data: [] });
  const [selectedTemple, setSelectedTemple] = useState(null);
  const [isTempleOpen, setIsTempleOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [localImages, setLocalImages] = useState(Array(4).fill(null));

  useEffect(() => {
    const loadData = async () => {
      try {
        const templesData = await fetchAPI("temples");
        if (templesData) setTemples(templesData);
      } catch (error) {
        console.error("Failed to load data:", error);
      }
    };
    loadData();
  }, []);

  const uploadImage = async (file) => {
    try {
      setUploading(true);
      const formData = new FormData();
      formData.append("files", file);
      const data = await fetchAPI("upload", "POST", formData);
      return data[0]?.url;
    } finally {
      setUploading(false);
    }
  };

  const handleImageUpload = async (e, index) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const imageUrl = await uploadImage(file);
      const newImages = [...localImages];
      newImages[index] = { url: imageUrl, file };
      setLocalImages(newImages);
    } catch (error) {
      alert("Failed to upload image");
    }
  };

  const handleImageDelete = (index) => {
    const newImages = [...localImages];
    newImages[index] = null;
    setLocalImages(newImages);
  };

  const handleTempleSubmit = async (e) => {
    e.preventDefault();
    try {
      const templeData = {
        name: selectedTemple.name,
        description: selectedTemple.description,
        images: localImages.filter(img => img?.url).map(img => img.url)
      };

      const method = selectedTemple?._id ? "PUT" : "POST";
      const endpoint = selectedTemple?._id ? `temples/${selectedTemple._id}` : "temples";

      const savedData = await fetchAPI(endpoint, method, templeData);

      if (savedData) {
        setTemples(prev => ({
          ...prev,
          data: selectedTemple?._id
            ? prev.data.map(t => t._id === savedData._id ? savedData : t)
            : [savedData, ...prev.data]
        }));
        setIsTempleOpen(false);
        setSelectedTemple(null);
        setLocalImages(Array(4).fill(null));
      }
    } catch (error) {
      alert("Temple submission failed");
    }
  };

  const handleTempleDelete = async (templeId) => {
    if (window.confirm("Are you sure you want to delete this temple?")) {
      try {
        await fetchAPI(`temples/${templeId}`, "DELETE");
        setTemples(prev => ({
          ...prev,
          data: prev.data.filter(t => t._id !== templeId)
        }));
      } catch (error) {
        alert("Failed to delete temple");
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Manage Temples</h1>
        <Button
          text="Add Temple"
              variant="default"
          onClick={() => {
            
            setSelectedTemple({
              name: "",
              description: "",
              images: []
            });
            setIsTempleOpen(true);
          }}
          icon={<FiPlus className="mr-2" />}
        />
      </div>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Name</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 hidden md:table-cell">
                Image
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {temples.data?.map((temple) => (
              <tr key={temple._id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4 font-medium text-gray-900">{temple.name}</td>
                <td className="px-4 py-4 hidden md:table-cell">
                  {temple.images?.[0] && (
                    <img
                      src={temple.images[0]}
                      alt={temple.name}
                      className="h-12 w-12 object-cover rounded-lg"
                    />
                  )}
                </td>
                <td className="px-4 py-4 flex items-center gap-2">
                  <button
                    onClick={() => {
                      setSelectedTemple(temple);
                      setLocalImages(temple.images.map(url => ({ url })));
                      setIsTempleOpen(true);
                    }}
                    className="text-blue-600 hover:text-blue-800 p-2 rounded-lg hover:bg-blue-50"
                  >
                    <FiEdit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleTempleDelete(temple._id)}
                    className="text-red-600 hover:text-red-800 p-2 rounded-lg hover:bg-red-50"
                  >
                    <FiTrash className="w-5 h-5 text-red" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isTempleOpen && (
        <div className="fixed inset-0 bg-black/30 z-50 overflow-y-auto p-4">
          <div className="w-full max-w-7xl mx-auto">
            <FormContainer
              title={selectedTemple?._id ? "Edit Temple" : "Add New Temple"}
              onClose={() => setIsTempleOpen(false)} width="200px"
            >
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">Temple Information</h2>
                <div className="space-y-4">
                  <Input
                    label="Temple Name"
                    value={selectedTemple?.name || ""}
                    onChange={(e) => setSelectedTemple(prev => ({
                      ...prev,
                      name: e.target.value
                    }))}
                  />
                  <TextArea
                    label="Description"
                    value={selectedTemple?.description || ""}
                    onChange={(e) => setSelectedTemple(prev => ({
                      ...prev,
                      description: e.target.value
                    }))}
                    rows={4}
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Images</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="relative flex flex-col items-center justify-center h-48 bg-gray-50 rounded-lg border border-gray-200">
                      {localImages[0]?.url ? (
                        <>
                          <img
                            src={localImages[0].url}
                            alt="Preview"
                            className="h-full w-full object-cover rounded-lg"
                          />
                          <button
                            onClick={() => handleImageDelete(0)}
                            className="absolute top-2 right-2 p-1 bg-white rounded-full shadow"
                          >
                            <FiX className="w-4 h-4 text-red-600" />
                          </button>
                        </>
                      ) : (
                        <label className="flex flex-col items-center justify-center cursor-pointer">
                          {uploading ? (
                            <span className="text-gray-500">Uploading...</span>
                          ) : (
                            <>
                              <FiImage className="w-8 h-8 text-gray-400" />
                              <input
                                type="file"
                                onChange={(e) => handleImageUpload(e, 0)}
                                className="hidden"
                                accept="image/*"
                              />
                            </>
                          )}
                        </label>
                      )}
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3].map((index) => (
                        <div key={index} className="relative h-32 bg-gray-50 rounded-lg border">
                          {localImages[index]?.url ? (
                            <>
                              <img
                                src={localImages[index].url}
                                alt="Preview"
                                className="h-full w-full object-cover rounded-lg"
                              />
                              <button
                                onClick={() => handleImageDelete(index)}
                                className="absolute top-2 right-2 p-1 bg-white rounded-full shadow"
                              >
                                <FiX className="w-4 h-4 text-red-600" />
                              </button>
                            </>
                          ) : (
                            <label className="flex flex-col items-center justify-center h-full cursor-pointer">
                              <FiImage className="w-6 h-6 text-gray-400" />
                              <input
                                type="file"
                                onChange={(e) => handleImageUpload(e, index)}
                                className="hidden"
                                accept="image/*"
                              />
                            </label>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 justify-end mt-8 pt-6 border-t">
                <Button
                  text="Cancel"
                  onClick={() => setIsTempleOpen(false)}
                  variant=""
                />
                <Button
                  text={selectedTemple?._id ? "Save Changes" : "Create Temple"}
                  onClick={handleTempleSubmit}
                  variant="default"
                />
              </div>
            </FormContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default TempleManager;