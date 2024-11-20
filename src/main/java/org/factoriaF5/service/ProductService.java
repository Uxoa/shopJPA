package org.factoriaF5.service;

import org.factoriaF5.model.Product;
import org.factoriaF5.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductRepository productRepository;
    
    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
    
    public List<Product> findAll() {
        return productRepository.findAll();
    }
    
    public Product findById(Long id) {
        return productRepository.findById(id).orElse(null);
    }
    
    public Product save(Product product) {
        return productRepository.save(product);
    }
    
    public void delete(Long id) {
        productRepository.deleteById(id);
    }
}